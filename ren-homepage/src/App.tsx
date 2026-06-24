import { useEffect, useState } from 'react'
import './App.css'

const projectRecords = [
  {
    id: 'REN-001',
    name: 'Fractal',
    layer: 'engine',
    role: 'HTML knowledge engine',
    path: '~/projects/fractal',
    status: 'active',
    summary:
      'Rust engine for file-backed HTML projects: metadata, notes, links, validation, search, and graph indexes.',
    comparison: 'Keeps the project readable without the app: plain files in, inspectable index out.',
    stats: ['Rust CLI', 'HTML pages', 'graph index'],
    duties: ['Define project format', 'Validate pages', 'Build indexes', 'Map links'],
    details: [
      'Fractal is the foundation layer: it defines the project shape, reads and validates pages, and produces indexes other tools can trust.',
      'The aim is boring durability. A project should stay legible as HTML and metadata first, with search and graph records as supporting artifacts instead of a proprietary vault.',
    ],
  },
  {
    id: 'REN-002',
    name: 'Amanite',
    layer: 'surface',
    role: 'Desktop editor',
    path: '~/apps/amanite',
    status: 'active',
    summary:
      'Desktop editor for opening Fractal folders, writing pages, saving changes, and inspecting linked records.',
    comparison: 'The calm working surface on top of the engine: local, graph-aware, and built for writing.',
    stats: ['Tauri app', 'rich editor', 'link inspector'],
    duties: ['Open projects', 'Edit pages', 'Save through engine', 'Inspect links'],
    details: [
      'Amanite is the working surface: open a Fractal folder, write pages, move through links, and see enough structure to know where you are.',
      'It should feel like a desktop instrument over plain files, not a cloud workspace with an export button taped on at the end.',
    ],
  },
]

const footerLinks = [
  ['GitHub', 'https://github.com/AlbinDalbert'],
  ['Projects', '#projects'],
  ['Top', '#top'],
]

type ProjectRecord = (typeof projectRecords)[number]

function ProjectDetailModal({ project, onClose }: { project: ProjectRecord; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal-chrome">
          <span>record: {project.id}</span>
          <button type="button" onClick={onClose}>Close</button>
        </div>

        <div className="project-modal-sheet">
          <div className="project-modal-meta">
            <span>{project.path}</span>
            <span>{project.status}</span>
          </div>

          <p className="ledger-kicker">Project record</p>
          <h2 id={`project-modal-title-${project.id}`}>{project.name}</h2>
          <p className="project-modal-role">{project.layer} layer / {project.role}</p>

          <div className="project-modal-copy">
            {project.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="project-modal-grid">
            <section>
              <span>Purpose</span>
              <p>{project.comparison}</p>
            </section>
            <section>
              <span>Current duties</span>
              <ul>
                {project.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </section>
          </div>

          <ul className="project-modal-tags" aria-label={`${project.name} tags`}>
            {project.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}

function LedgerApplicationContents({ project, titleId }: { project: ProjectRecord; titleId?: string }) {
  return (
    <>
      <div className="ledger-page-meta">
        <span>{project.id}</span>
        <span>{project.status}</span>
      </div>

      <p className="ledger-kicker">Application record</p>
      <h1 id={titleId}>{project.name}</h1>
      <p className="ledger-page-role">{project.layer} layer / {project.role}</p>
      <p>{project.summary}</p>

      <div className="ledger-app-details" aria-label={`${project.name} details`}>
        <div>
          <span>path</span>
          <strong>{project.path}</strong>
        </div>
        <div>
          <span>mode</span>
          <strong>{project.layer}</strong>
        </div>
        <div>
          <span>state</span>
          <strong>{project.status}</strong>
        </div>
      </div>

      <ul className="ledger-page-tags" aria-label={`${project.name} tags`}>
        {project.stats.map((stat) => (
          <li key={stat}>{stat}</li>
        ))}
      </ul>

      <div className="ledger-page-body-grid ledger-page-brief-grid">
        <section aria-label={`${project.name} purpose`}>
          <span>purpose</span>
          <p>{project.comparison}</p>
        </section>
        <section aria-label={`${project.name} duties`}>
          <span>does</span>
          <ul>
            {project.duties.slice(0, 3).map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="ledger-page-actions">
        <a className="ledger-button ledger-button-on-paper" href="#projects">Inspect records</a>
        <a
          className="ledger-button ledger-button-on-paper ledger-button-on-paper-primary"
          href="https://github.com/AlbinDalbert"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </>
  )
}

function ProjectCards({ onSelect }: { onSelect: (project: ProjectRecord) => void }) {
  return (
    <div className="ledger-records">
      {projectRecords.map((project) => (
        <article
          className="ledger-record ledger-record-clickable"
          role="button"
          tabIndex={0}
          aria-label={`Open ${project.name} record`}
          onClick={() => onSelect(project)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelect(project)
            }
          }}
          key={project.id}
        >
          <div className="ledger-record-top">
            <span>{project.id}</span>
            <strong>{project.status}</strong>
          </div>
          <p className="ledger-record-layer">{project.layer} / {project.role}</p>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <blockquote>{project.comparison}</blockquote>
          <ul>
            {project.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
          <span className="ledger-record-action">Open record</span>
        </article>
      ))}
    </div>
  )
}

function App() {
  const [activeProjectId, setActiveProjectId] = useState(projectRecords[0].id)
  const [ledgerClosed, setLedgerClosed] = useState(true)
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null)
  const activeProject = projectRecords.find((project) => project.id === activeProjectId) ?? projectRecords[0]

  return (
    <main className="ledger-home" id="top">
      <div className="ledger-bg" aria-hidden="true" />

      <header className="ledger-header" aria-label="Primary navigation">
        <a className="ledger-brand" href="#top" aria-label="Back to top">
          <span className="ledger-brand-mark" aria-hidden="true">REN</span>
          <span>
            <strong>Albin Dalbert</strong>
            <em>Fractal / Amanite archive</em>
          </span>
        </a>

        <nav className="ledger-nav" aria-label="Site sections">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="https://github.com/AlbinDalbert" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="night-ledger-hero" aria-labelledby="ledger-title">
        <button
          className="ledger-spine"
          type="button"
          aria-controls="ledger-volume"
          aria-expanded={!ledgerClosed}
          onClick={() => setLedgerClosed((closed) => !closed)}
        >
          <span>Albin</span>
          <strong>REN</strong>
          <em>{ledgerClosed ? 'home index' : 'project ledger'}</em>
        </button>

        <div
          className={`ledger-stack ${ledgerClosed ? 'ledger-stack-closed' : 'ledger-stack-open'}`}
          id="ledger-volume"
          aria-label={ledgerClosed ? 'Closed landing ledger' : 'Open application ledger'}
        >
          <div className="ledger-app-tabs" role="tablist" aria-label="Application ledger tabs">
            {projectRecords.map((project) => (
              <button
                className="ledger-app-tab"
                id={`ledger-tab-${project.id}`}
                type="button"
                role="tab"
                aria-selected={!ledgerClosed && activeProject.id === project.id}
                aria-controls={`ledger-panel-${project.id}`}
                onClick={() => {
                  setActiveProjectId(project.id)
                  setLedgerClosed(false)
                }}
                key={project.id}
              >
                <span>{project.id}</span>
                <strong>{project.name}</strong>
              </button>
            ))}
          </div>

          {ledgerClosed ? (
            <>
              <article className="ledger-cover" aria-labelledby="ledger-title">
                <div className="ledger-cover-meta">
                  <span>record: REN/HOME</span>
                  <span>state: public ledger</span>
                </div>
                <p className="ledger-kicker">Personal site</p>
                <h1 id="ledger-title">Albin Dalbert</h1>
                <p>
                  Fractal is the engine. Amanite is the desktop editor. This site is the public index for a local-first HTML knowledge stack.
                </p>
                <div className="ledger-cover-index" aria-label="Ledger index">
                  {projectRecords.map((project) => (
                    <div key={project.id}>
                      <span>{project.id}</span>
                      <strong>{project.name}</strong>
                      <em>{project.layer}</em>
                    </div>
                  ))}
                </div>
                <div className="ledger-cover-actions">
                  <button
                    className="ledger-button ledger-button-primary"
                    type="button"
                    onClick={() => setLedgerClosed(false)}
                  >
                    Open ledger
                  </button>
                  <a className="ledger-button" href="#projects">Inspect records</a>
                  <a
                    className="ledger-button"
                    href="https://github.com/AlbinDalbert"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            </>
          ) : (
            <article
              className="ledger-page"
              id={`ledger-panel-${activeProject.id}`}
              role="tabpanel"
              aria-labelledby={`ledger-tab-${activeProject.id}`}
              key={activeProject.id}
            >
              <LedgerApplicationContents project={activeProject} titleId="ledger-title" />
            </article>
          )}
        </div>
      </section>

      <section className="ledger-section" id="projects" aria-labelledby="projects-title">
        <div className="ledger-section-heading">
          <p className="ledger-kicker">Filed entries</p>
          <h2 id="projects-title">Engine first. Interface second.</h2>
        </div>
        <ProjectCards onSelect={setSelectedProject} />
      </section>

      <section className="ledger-section about-profile-section" id="about" aria-labelledby="about-title">
        <article className="document-card about-profile-card">
          <div className="about-profile-heading">
            <div>
              <p className="ledger-kicker">About</p>
              <h2 id="about-title">Albin Dalbert</h2>
            </div>
            <a
              className="about-avatar"
              href="https://github.com/AlbinDalbert"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Albin Dalbert on GitHub"
            >
              <img src="https://github.com/AlbinDalbert.png" alt="Albin Dalbert" loading="lazy" />
            </a>
          </div>

          <div className="about-profile-body">
            <p>
              I build small systems for writing, archives, and personal knowledge. I care about tools that leave something durable behind: plain files, visible structure, and work that can still be inspected when the app is closed.
            </p>
            <p>
              My taste sits somewhere between field terminal, document cabinet, and quiet desktop instrument. I like local-first software, calm interfaces, and projects where the artifact matters more than the chrome around it.
            </p>
          </div>
        </article>
      </section>

      <footer className="ledger-footer" aria-label="Footer">
        <span className="ledger-footer-mark">REN / Albin Dalbert</span>
        <nav aria-label="Footer links">
          {footerLinks.map(([label, href]) => (
            <a
              href={href}
              key={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </footer>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  )
}

export default App

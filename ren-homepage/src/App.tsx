import { useState } from 'react'
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
      'Rust CLI/library for file-backed HTML projects: pages, metadata, notes, links, search, validation, and graph indexes.',
    comparison: 'Engine layer: validates projects, builds indexes, syncs links, and keeps the folder readable without the app.',
    stats: ['Rust CLI', 'HTML pages', 'graph index'],
    duties: ['Project format', 'Validation', 'Search index', 'Link graph'],
  },
  {
    id: 'REN-002',
    name: 'Amanite',
    layer: 'surface',
    role: 'Desktop editor',
    path: '~/apps/amanite',
    status: 'active',
    summary:
      'Tauri/React editor for opening Fractal projects, writing pages, saving through the engine, and inspecting linked records.',
    comparison: 'Interface layer: project browser, rich editor, graph-aware side panels, and a calm local writing surface.',
    stats: ['Tauri app', 'rich editor', 'link inspector'],
    duties: ['Open projects', 'Edit pages', 'Save through engine', 'Inspect links'],
  },
]

const stackLayers = [
  {
    label: '01',
    title: 'Fractal',
    meta: 'engine layer',
    copy: 'Project format, validation, import/export, search, graph data, and the rules that keep local HTML useful.',
  },
  {
    label: '02',
    title: 'Amanite',
    meta: 'interface layer',
    copy: 'Project open/create, page editor, save flow, validation reports, and graph-aware working panels.',
  },
  {
    label: '03',
    title: 'Albin',
    meta: 'operator layer',
    copy: 'Building the stack, documenting the work, shipping experiments, and filing demos/releases in public.',
  },
]

const commitments = [
  ['001', 'Artifact', 'HTML remains readable on disk', 'sealed'],
  ['002', 'Graph', 'Links and notes become inspectable project memory', 'active'],
  ['003', 'Editor', 'Writing happens in a local desktop instrument', 'active'],
  ['004', 'Site', 'Demos, releases, and field notes are filed here', 'draft'],
]

const notes = ['HTML stays readable.', 'Fractal keeps the graph.', 'Amanite edits the pages.']

const contactRows = [
  ['GitHub', 'github.com/AlbinDalbert', 'available'],
  ['Docs', 'project notes and release logs', 'soon'],
  ['Demos', 'Fractal / Amanite experiments', 'filing'],
]

type ProjectRecord = (typeof projectRecords)[number]

function LedgerTable() {
  return (
    <div className="ledger-table" role="table" aria-label="Archive commitments">
      <div className="ledger-table-row ledger-table-head" role="row">
        <span role="columnheader">ID</span>
        <span role="columnheader">Area</span>
        <span role="columnheader">Commitment</span>
        <span role="columnheader">State</span>
      </div>
      {commitments.map(([id, area, commitment, state]) => (
        <div className="ledger-table-row" role="row" key={id}>
          <span role="cell">{id}</span>
          <span role="cell">{area}</span>
          <span role="cell">{commitment}</span>
          <span role="cell">{state}</span>
        </div>
      ))}
    </div>
  )
}

function LedgerApplicationContents({ project, titleId }: { project: ProjectRecord; titleId?: string }) {
  return (
    <>
      <div className="ledger-page-meta">
        <span>path: {project.path}</span>
        <span>status: {project.status}</span>
      </div>

      <p className="ledger-kicker">Application ledger</p>
      <h1 id={titleId}>{project.name} keeps the {project.layer} layer.</h1>
      <p>{project.summary}</p>

      <div className="ledger-app-details" aria-label={`${project.name} details`}>
        <div>
          <span>record</span>
          <strong>{project.id}</strong>
        </div>
        <div>
          <span>layer</span>
          <strong>{project.layer}</strong>
        </div>
        <div>
          <span>artifact</span>
          <strong>{project.path}</strong>
        </div>
      </div>

      <ul className="ledger-page-tags" aria-label={`${project.name} tags`}>
        {project.stats.map((stat) => (
          <li key={stat}>{stat}</li>
        ))}
      </ul>

      <div className="ledger-page-body-grid">
        <section aria-label={`${project.name} purpose`}>
          <span>purpose</span>
          <p>{project.comparison}</p>
        </section>
        <section aria-label={`${project.name} duties`}>
          <span>current duties</span>
          <ul>
            {project.duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </section>
      </div>

      <LedgerTable />
    </>
  )
}

function ProjectCards() {
  return (
    <div className="ledger-records">
      {projectRecords.map((project) => (
        <article className="ledger-record" key={project.id}>
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
        </article>
      ))}
    </div>
  )
}

function App() {
  const [activeProjectId, setActiveProjectId] = useState(projectRecords[0].id)
  const [ledgerClosed, setLedgerClosed] = useState(true)
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
          <a href="#stack">Stack</a>
          <a href="#commitments">Ledger</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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

              <div className="ledger-page ledger-cover-sizer" aria-hidden="true">
                <LedgerApplicationContents project={activeProject} />
              </div>
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
          <h2 id="projects-title">Two projects. One local stack.</h2>
        </div>
        <ProjectCards />
      </section>

      <section className="ledger-section" id="stack" aria-labelledby="stack-title">
        <div className="ledger-section-heading ledger-section-heading-wide">
          <p className="ledger-kicker">Shape</p>
          <h2 id="stack-title">Engine first. Interface second.</h2>
        </div>

        <div className="stack-ledger" aria-label="Stack layers">
          {stackLayers.map((layer) => (
            <article className="stack-ledger-card" key={layer.label}>
              <span>{layer.label}</span>
              <div>
                <p>{layer.meta}</p>
                <h3>{layer.title}</h3>
              </div>
              <p>{layer.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ledger-section ledger-split-section" id="commitments" aria-labelledby="commitments-title">
        <div className="ledger-split-copy">
          <p className="ledger-kicker">Ledger</p>
          <h2 id="commitments-title">What the homepage should make obvious.</h2>
          <p>
            Less dashboard, more index: a clear map of what exists, what each project does, and where the durable work lives.
          </p>
        </div>
        <LedgerTable />
      </section>

      <section className="ledger-section about-ledger-grid" id="about" aria-labelledby="about-title">
        <article className="document-card">
          <p className="ledger-kicker">About</p>
          <h2 id="about-title">I build tools for linked pages and local knowledge graphs.</h2>
          <p>
            This is the home base for notes, releases, demos, and experiments around Fractal and Amanite. The durable artifact is a folder of pages; the graph is an index; the editor is only the instrument.
          </p>
        </article>

        <aside className="note-ledger" aria-label="Project notes">
          {notes.map((note, index) => (
            <p key={note}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {note}
            </p>
          ))}
        </aside>
      </section>

      <section className="ledger-section contact-ledger" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="ledger-kicker">Contact</p>
          <h2 id="contact-title">More records soon.</h2>
          <p>Links, demos, docs, and releases can live here when they are ready.</p>
        </div>

        <div className="contact-register" aria-label="Contact and publication register">
          {contactRows.map(([label, value, state]) => (
            <div className="contact-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <em>{state}</em>
            </div>
          ))}
          <a
            className="ledger-button ledger-button-primary"
            href="https://github.com/AlbinDalbert"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App

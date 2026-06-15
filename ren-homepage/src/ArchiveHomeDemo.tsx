import './ArchiveHomeDemo.css'

const projects = [
  {
    id: 'REN-001',
    name: 'Fractal',
    type: 'Engine layer',
    status: 'active',
    summary: 'Rust CLI/library for file-backed HTML projects: metadata, notes, links, search, validation, and graph indexes.',
    tags: ['Rust CLI', 'HTML source', 'graph index'],
  },
  {
    id: 'REN-002',
    name: 'Amanite',
    type: 'Interface layer',
    status: 'active',
    summary: 'Desktop editor for opening Fractal projects, writing pages, saving through the engine, and inspecting linked records.',
    tags: ['Tauri app', 'rich editor', 'link inspector'],
  },
]

const ledgerRows = [
  ['001', 'Source', 'HTML stays readable on disk', 'sealed'],
  ['002', 'Index', 'Links and notes become inspectable graph data', 'active'],
  ['003', 'Editor', 'Writing happens in a local desktop instrument', 'active'],
  ['004', 'Site', 'Demos, releases, and field notes are filed here', 'draft'],
]

const principles = [
  {
    label: 'local-first',
    title: 'Files before platforms',
    copy: 'The durable artifact is a folder of pages, not a remote account or a private database.',
  },
  {
    label: 'inspectable',
    title: 'Metadata stays visible',
    copy: 'IDs, paths, links, counts, and state are treated as first-class interface material.',
  },
  {
    label: 'calm tool',
    title: 'Console around document',
    copy: 'Dark operator chrome frames quieter writing surfaces that feel stable and worth keeping.',
  },
]

function ArchiveHomeDemo() {
  return (
    <main className="archive-home" id="archive-top">
      <div className="archive-bg" aria-hidden="true" />

      <header className="archive-topbar" aria-label="Archive homepage navigation">
        <a className="archive-brand" href="#archive-top" aria-label="Back to archive homepage top">
          <span className="archive-brand-mark" aria-hidden="true">R</span>
          <span>
            <strong>Ren</strong>
            <em>archive homepage / demo 02</em>
          </span>
        </a>

        <nav className="archive-nav">
          <a href="#archive-projects">Projects</a>
          <a href="#archive-ledger">Ledger</a>
          <a href="#archive-principles">Principles</a>
          <a href="?demo=archive-atlas">Variants</a>
          <a href="./">Demo 01</a>
        </nav>
      </header>

      <section className="archive-hero" aria-labelledby="archive-title">
        <div className="archive-hero-panel">
          <div className="archive-meta-strip" aria-label="Homepage metadata">
            <span>record: REN/HOME/02</span>
            <span>signal: amber</span>
            <span>state: public draft</span>
          </div>

          <div className="archive-hero-copy">
            <p className="archive-kicker">Warm Archive Console</p>
            <h1 id="archive-title">A local archive for linked HTML work.</h1>
            <p className="archive-lede">
              Fractal keeps the project format and graph honest. Amanite gives it a desktop surface. This homepage acts as the public index for that stack.
            </p>
          </div>

          <div className="archive-hero-actions" aria-label="Homepage actions">
            <a className="archive-button archive-button-primary" href="#archive-projects">Inspect records</a>
            <a className="archive-button" href="https://github.com/AlbinDalbert" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <aside className="archive-register-card" aria-label="Project register preview">
          <div className="archive-panel-title">
            <span>project register</span>
            <strong>2 active</strong>
          </div>

          <div className="archive-mini-records">
            {projects.map((project) => (
              <a className="archive-mini-record" href="#archive-projects" key={project.id}>
                <span>{project.id}</span>
                <strong>{project.name}</strong>
                <em>{project.type}</em>
              </a>
            ))}
          </div>

          <div className="archive-document-note">
            <span>working note</span>
            <p>HTML remains the artifact. The graph is an index. The editor is only the instrument.</p>
          </div>
        </aside>
      </section>

      <section className="archive-section" id="archive-projects" aria-labelledby="archive-projects-title">
        <div className="archive-section-heading">
          <p className="archive-kicker">Current work</p>
          <h2 id="archive-projects-title">Two records, one stack.</h2>
        </div>

        <div className="archive-project-grid">
          {projects.map((project) => (
            <article className="archive-project" key={project.id}>
              <div className="archive-project-top">
                <span>{project.id}</span>
                <strong>{project.status}</strong>
              </div>
              <p className="archive-project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section archive-ledger-section" id="archive-ledger" aria-labelledby="archive-ledger-title">
        <div className="archive-ledger-copy">
          <p className="archive-kicker">Ledger</p>
          <h2 id="archive-ledger-title">What this homepage should make obvious.</h2>
          <p>
            Less dashboard, more index: a clear map of what exists, what each project does, and where the durable work lives.
          </p>
        </div>

        <div className="archive-ledger" role="table" aria-label="Archive commitments">
          <div className="archive-ledger-row archive-ledger-head" role="row">
            <span role="columnheader">ID</span>
            <span role="columnheader">Area</span>
            <span role="columnheader">Commitment</span>
            <span role="columnheader">State</span>
          </div>
          {ledgerRows.map(([id, area, commitment, state]) => (
            <div className="archive-ledger-row" role="row" key={id}>
              <span role="cell">{id}</span>
              <span role="cell">{area}</span>
              <span role="cell">{commitment}</span>
              <span role="cell">{state}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="archive-section" id="archive-principles" aria-labelledby="archive-principles-title">
        <div className="archive-section-heading archive-section-heading-wide">
          <p className="archive-kicker">Principles</p>
          <h2 id="archive-principles-title">Dark shell. Durable pages. Visible state.</h2>
        </div>

        <div className="archive-principle-grid">
          {principles.map((principle) => (
            <article className="archive-principle" key={principle.label}>
              <span>{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section archive-footer-card" aria-labelledby="archive-footer-title">
        <div>
          <p className="archive-kicker">Next record</p>
          <h2 id="archive-footer-title">File demos, docs, releases, and notes here.</h2>
          <p>As Fractal and Amanite mature, this page can become a small public archive instead of a generic portfolio front.</p>
        </div>
        <div className="archive-footer-actions">
          <a className="archive-button archive-button-primary" href="?demo=archive-atlas">View variants</a>
          <a className="archive-button" href="./">Return to demo 01</a>
        </div>
      </section>
    </main>
  )
}

export default ArchiveHomeDemo

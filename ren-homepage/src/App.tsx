import type { CSSProperties } from 'react'
import './App.css'

const projects = [
  {
    slug: 'fractal',
    name: 'Fractal',
    role: 'HTML knowledge engine',
    summary: 'Rust CLI/library for file-backed HTML projects: pages, metadata, notes, links, search, and graph indexes.',
    comparison: 'Engine layer: validates projects, builds indexes, syncs links.',
    points: ['Rust CLI', 'HTML pages', 'graph index'],
  },
  {
    slug: 'amanite',
    name: 'Amanite',
    role: 'Desktop editor',
    summary: 'Tauri/React editor for Fractal projects: open a project, edit pages, save through the engine, inspect links.',
    comparison: 'Interface layer: project browser, rich editor, graph-aware side panels.',
    points: ['Tauri app', 'rich editor', 'link inspector'],
  },
]

const stackLayers = [
  {
    label: '01',
    title: 'Fractal',
    copy: 'Project format, validation, import/export, search, graph data.',
  },
  {
    label: '02',
    title: 'Amanite',
    copy: 'Project open/create, page editor, save, validate, index controls.',
  },
  {
    label: '03',
    title: 'Albin',
    copy: 'Building the stack, documenting the work, shipping experiments.',
  },
]

const notes = ['HTML stays readable.', 'Fractal keeps the graph.', 'Amanite edits the pages.']

function App() {
  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="crt-overlay" aria-hidden="true" />

      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">AD</span>
          <span>Albin Dalbert</span>
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">personal site</p>
          <h1>Page tools, split in two.</h1>
          <p className="hero-lede">
            <strong>Fractal</strong> is the engine. <strong>Amanite</strong> is the desktop editor. One stack for HTML projects and local graphs.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href="https://github.com/AlbinDalbert" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="portal-frame" aria-label="Current project portals">
          {projects.map((project) => (
            <article className={`portal-card ${project.slug}`} key={project.name}>
              <div className="portal-header">
                <span className="status-dot" aria-hidden="true" />
                <p>{project.role}</p>
              </div>
              <h2>{project.name}</h2>
              <p className="portal-summary">{project.comparison}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="kicker">current work</p>
          <h2 id="projects-title">Two projects. One stack.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.slug}`} key={project.slug}>
              <div>
                <p className="project-role">{project.role}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.summary}</p>
              </div>
              <blockquote>{project.comparison}</blockquote>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack" aria-labelledby="stack-title">
        <div className="section-heading compact">
          <p className="kicker">shape</p>
          <h2 id="stack-title">Engine first. Interface second.</h2>
        </div>

        <div className="stack-diagram">
          {stackLayers.map((layer, index) => (
            <article className="stack-layer" key={layer.label} style={{ '--layer-index': index } as CSSProperties}>
              <span>{layer.label}</span>
              <h3>{layer.title}</h3>
              <p>{layer.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="about-card">
          <p className="kicker">about</p>
          <h2 id="about-title">I build tools for linked pages and local knowledge graphs.</h2>
          <p>
            This is the home base for notes, releases, demos, and experiments around Fractal and Amanite.
          </p>
        </div>

        <div className="note-stack" aria-label="Project notes">
          {notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="kicker">contact</p>
          <h2 id="contact-title">More soon.</h2>
          <p>Links, demos, docs, and releases can live here when they are ready.</p>
        </div>
        <a className="button primary" href="https://github.com/AlbinDalbert" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </section>
    </main>
  )
}

export default App

import { useState, type CSSProperties } from "react";
import "./ArchiveVariantDemos.css";

const projectRecords = [
  {
    id: "REN-001",
    name: "Fractal",
    layer: "engine",
    path: "~/projects/fractal",
    status: "active",
    summary:
      "Rust CLI/library for file-backed HTML projects: validation, metadata, notes, links, search, and graph indexes.",
    stats: ["Rust CLI", "HTML source", "graph index"],
  },
  {
    id: "REN-002",
    name: "Amanite",
    layer: "surface",
    path: "~/apps/amanite",
    status: "active",
    summary:
      "Desktop editor for opening Fractal projects, writing pages, saving through the engine, and inspecting local graph state.",
    stats: ["Tauri app", "editor surface", "graph inspector"],
  },
];

const commitments = [
  ["001", "artifact", "HTML remains readable on disk", "sealed"],
  ["002", "graph", "Links become inspectable project memory", "active"],
  ["003", "editor", "The interface edits through the engine", "active"],
  ["004", "home", "Demos and releases become public records", "draft"],
];

const variantLinks = [
  ["atlas", "03 Atlas"],
  ["ledger", "04 Ledger"],
  ["stacks", "05 Stacks"],
] as const;

const variantKeys = variantLinks.map(([key]) => key);
type ArchiveVariantKey = (typeof variantKeys)[number];

function isVariantKey(value: string): value is ArchiveVariantKey {
  return (variantKeys as readonly string[]).includes(value);
}

function VariantHeader({
  active,
  label,
}: {
  active: ArchiveVariantKey;
  label: string;
}) {
  return (
    <header className="variant-header" aria-label={`${label} navigation`}>
      <a
        className="variant-brand"
        href="?demo=archive"
        aria-label="Return to archive demo 02"
      >
        <span className="variant-brand-mark" aria-hidden="true">
          REN
        </span>
        <span>
          <strong>Archive variants</strong>
          <em>{label}</em>
        </span>
      </a>

      <nav className="variant-switcher" aria-label="Archive homepage variants">
        <a href="./">01 Original</a>
        <a href="?demo=archive">02 Console</a>
        {variantLinks.map(([key, text]) => (
          <a
            href={`?demo=archive-${key}`}
            aria-current={active === key ? "page" : undefined}
            key={key}
          >
            {text}
          </a>
        ))}
      </nav>
    </header>
  );
}

function VariantProjectCards() {
  return (
    <div className="variant-records">
      {projectRecords.map((project) => (
        <article className="variant-record" key={project.id}>
          <div className="variant-record-top">
            <span>{project.id}</span>
            <strong>{project.status}</strong>
          </div>
          <p className="variant-record-layer">{project.layer}</p>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <ul>
            {project.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function LedgerTable() {
  return (
    <div
      className="variant-ledger-table"
      role="table"
      aria-label="Archive commitments"
    >
      <div className="variant-ledger-row variant-ledger-head" role="row">
        <span role="columnheader">ID</span>
        <span role="columnheader">Area</span>
        <span role="columnheader">Commitment</span>
        <span role="columnheader">State</span>
      </div>
      {commitments.map(([id, area, commitment, state]) => (
        <div className="variant-ledger-row" role="row" key={id}>
          <span role="cell">{id}</span>
          <span role="cell">{area}</span>
          <span role="cell">{commitment}</span>
          <span role="cell">{state}</span>
        </div>
      ))}
    </div>
  );
}

function LedgerApplicationContents({
  project,
  titleId,
}: {
  project: (typeof projectRecords)[number];
  titleId?: string;
}) {
  return (
    <>
      <div className="ledger-page-meta">
        <span>path: {project.path}</span>
        <span>status: {project.status}</span>
      </div>
      <p className="variant-kicker">Application Ledger</p>
      <h1 id={titleId}>
        {project.name} keeps the {project.layer} layer.
      </h1>
      <p>{project.summary}</p>

      <div
        className="ledger-app-details"
        aria-label={`${project.name} details`}
      >
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

      <LedgerTable />
    </>
  );
}

function AtlasVariant() {
  return (
    <main className="variant-home variant-atlas" id="variant-top">
      <div className="variant-bg" aria-hidden="true" />
      <VariantHeader active="atlas" label="demo 03 / atlas frame" />

      <section className="atlas-hero" aria-labelledby="atlas-title">
        <div className="atlas-copy">
          <p className="variant-kicker">Atlas Frame</p>
          <h1 id="atlas-title">Map the stack before entering it.</h1>
          <p>
            A homepage as cartographic index: projects are places, links are
            routes, and the durable artifact is always visible as a coordinate.
          </p>
          <div className="variant-actions">
            <a
              className="variant-button variant-button-primary"
              href="#atlas-map"
            >
              Open atlas
            </a>
            <a className="variant-button" href="#atlas-records">
              Inspect records
            </a>
          </div>
        </div>

        <div
          className="atlas-map"
          id="atlas-map"
          aria-label="Fractal and Amanite map"
        >
          <span className="atlas-coordinate atlas-coordinate-nw">
            N 59.33 / E 18.06
          </span>
          <span className="atlas-coordinate atlas-coordinate-se">
            REN GRAPH / LOCAL
          </span>
          <div className="atlas-route atlas-route-main" aria-hidden="true" />
          <div
            className="atlas-route atlas-route-secondary"
            aria-hidden="true"
          />
          <a className="atlas-node atlas-node-fractal" href="#atlas-records">
            <span>REN-001</span>
            <strong>Fractal</strong>
            <em>engine coordinate</em>
          </a>
          <a className="atlas-node atlas-node-amanite" href="#atlas-records">
            <span>REN-002</span>
            <strong>Amanite</strong>
            <em>editor coordinate</em>
          </a>
          <div className="atlas-compass" aria-hidden="true">
            <span>N</span>
            <strong>R</strong>
          </div>
        </div>
      </section>

      <section
        className="variant-section"
        id="atlas-records"
        aria-labelledby="atlas-records-title"
      >
        <div className="variant-section-heading">
          <p className="variant-kicker">Mapped records</p>
          <h2 id="atlas-records-title">
            Two coordinates define the current territory.
          </h2>
        </div>
        <VariantProjectCards />
      </section>
    </main>
  );
}

function LedgerVariant() {
  const [activeProjectId, setActiveProjectId] = useState(projectRecords[0].id);
  const [ledgerClosed, setLedgerClosed] = useState(true);
  const activeProject =
    projectRecords.find((project) => project.id === activeProjectId) ??
    projectRecords[0];

  return (
    <main className="variant-home variant-ledger" id="variant-top">
      <div className="variant-bg" aria-hidden="true" />
      <VariantHeader active="ledger" label="demo 04 / night ledger" />

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
          <em>{ledgerClosed ? "home index" : "project ledger"}</em>
        </button>

        <div
          className={`ledger-stack ${ledgerClosed ? "ledger-stack-closed" : "ledger-stack-open"}`}
          id="ledger-volume"
          aria-label={
            ledgerClosed ? "Closed landing ledger" : "Open application ledger"
          }
        >
          <div
            className="ledger-app-tabs"
            role="tablist"
            aria-label="Application ledger tabs"
          >
            {projectRecords.map((project) => (
              <button
                className="ledger-app-tab"
                id={`ledger-tab-${project.id}`}
                type="button"
                role="tab"
                aria-selected={!ledgerClosed && activeProject.id === project.id}
                aria-controls={`ledger-panel-${project.id}`}
                onClick={() => {
                  setActiveProjectId(project.id);
                  setLedgerClosed(false);
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
                  <span>record: REN/HOME/04</span>
                  <span>state: closed ledger</span>
                </div>
                <p className="variant-kicker">Portfolio</p>
                <h1 id="ledger-title">Albin Dalbert</h1>
                <p>
                  Fractal is the engine. Amanite is the writing surface. This
                  closed volume is the public landing page for the archive.
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
                    className="variant-button variant-button-primary"
                    type="button"
                    onClick={() => setLedgerClosed(false)}
                  >
                    Open ledger
                  </button>
                  <a
                    className="variant-button"
                    href="https://github.com/AlbinDalbert"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </article>

              <div
                className="ledger-page ledger-cover-sizer"
                aria-hidden="true"
              >
                <LedgerApplicationContents project={activeProject} />
              </div>
            </>
          ) : (
            <>
              <article
                className="ledger-page"
                id={`ledger-panel-${activeProject.id}`}
                role="tabpanel"
                aria-labelledby={`ledger-tab-${activeProject.id}`}
                key={activeProject.id}
              >
                <LedgerApplicationContents
                  project={activeProject}
                  titleId="ledger-title"
                />
              </article>
            </>
          )}
        </div>
      </section>

      <section
        className="variant-section"
        id="ledger-records"
        aria-labelledby="ledger-records-title"
      >
        <div className="variant-section-heading">
          <p className="variant-kicker">Filed entries</p>
          <h2 id="ledger-records-title">
            Each app becomes a tabbed section in the same thick book.
          </h2>
        </div>
        <VariantProjectCards />
      </section>
    </main>
  );
}

function StacksVariant() {
  return (
    <main className="variant-home variant-stacks" id="variant-top">
      <div className="variant-bg" aria-hidden="true" />
      <VariantHeader active="stacks" label="demo 05 / repository stacks" />

      <section className="stacks-hero" aria-labelledby="stacks-title">
        <div className="stacks-copy">
          <p className="variant-kicker">Repository Stacks</p>
          <h1 id="stacks-title">Shelves, drawers, and filed artifacts.</h1>
          <p>
            A more physical metaphor: the homepage becomes an archive wall where
            Fractal and Amanite are folders inside a growing repository.
          </p>
          <div className="variant-actions">
            <a
              className="variant-button variant-button-primary"
              href="#stacks-catalog"
            >
              Open catalog
            </a>
            <a className="variant-button" href="?demo=archive-ledger">
              Compare ledger
            </a>
          </div>
        </div>

        <div className="stacks-wall" aria-label="Repository shelves">
          {projectRecords.map((project, index) => (
            <a
              className="stack-folder"
              href="#stacks-catalog"
              style={{ "--folder-offset": `${index * 20}px` } as CSSProperties}
              key={project.id}
            >
              <span>{project.id}</span>
              <strong>{project.name}</strong>
              <em>{project.path}</em>
            </a>
          ))}
          <div className="stack-folder stack-folder-muted">
            <span>REN-003</span>
            <strong>Releases</strong>
            <em>pending shelf</em>
          </div>
          <div className="stack-folder stack-folder-muted">
            <span>REN-004</span>
            <strong>Field notes</strong>
            <em>pending shelf</em>
          </div>
        </div>
      </section>

      <section
        className="variant-section"
        id="stacks-catalog"
        aria-labelledby="stacks-catalog-title"
      >
        <div className="variant-section-heading">
          <p className="variant-kicker">Catalog</p>
          <h2 id="stacks-catalog-title">
            Each project is a drawer with visible labels.
          </h2>
        </div>
        <VariantProjectCards />
      </section>
    </main>
  );
}

function ArchiveVariantDemos({ variant }: { variant: string }) {
  const activeVariant = isVariantKey(variant) ? variant : "atlas";

  if (activeVariant === "ledger") {
    return <LedgerVariant />;
  }

  if (activeVariant === "stacks") {
    return <StacksVariant />;
  }

  return <AtlasVariant />;
}

export default ArchiveVariantDemos;

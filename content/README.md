# Site content

Public writing lives here rather than inside the Astro application.

The site reads Markdown and MDX files from `notes/` through the collection loader in `astro/src/content.config.ts`. This directory contains no application code and can later be moved into its own repository or mounted as a git submodule.

Keep the directory available at `content/notes` when building the site. The expected frontmatter is documented in `astro/README.md`.

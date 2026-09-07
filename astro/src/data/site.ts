export const site = {
  name: 'Albin Dalbert',
  shortName: 'AD',
  description: 'Developer building durable, local-first tools for writing, and personal knowledge.',
  github: 'https://github.com/AlbinDalbert',
}

export type Project = {
  id: string
  name: string
  eyebrow: string
  description: string
  note: string
  tags: string[]
  href?: string
  status: 'active' | 'exploring' | 'archived'
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'Fractal',
    eyebrow: 'Knowledge engine',
    description:
      'Link by default text project engine with HTML files as the base.',
    note: 'Plain files in. An inspectable index out.',
    tags: ['Rust', 'HTML', 'Local-first'],
    status: 'active',
  },
  {
    id: '02',
    name: 'Amanite',
    eyebrow: 'Desktop editor',
    description:
      'A place to write. A desktop editor for Fractal, with your files always within reach.',
    note: 'The interface serves the artifact, not the other way around.',
    tags: ['Tauri', 'TypeScript', 'Editor'],
    status: 'active',
  },
]

export const capabilities = [
  ['Systems', 'Rust, file formats, indexing, validation'],
  ['Interfaces', 'TypeScript, React, HTML, CSS, desktop UI'],
  ['Interests', 'Local-first software, writing tools, durable data'],
]

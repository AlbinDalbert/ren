import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const notesDirectory = import.meta.env.NOTES_CONTENT_DIR ?? '../content/notes'

const notes = defineCollection({
  // Kept outside the application so this directory can later become a
  // separate repository, checkout, or git submodule without page changes.
  loader: glob({ pattern: '**/*.{md,mdx}', base: notesDirectory }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { notes }

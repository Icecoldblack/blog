import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    draft: z.boolean().default(false),
    season: z.string().optional(),
    accent: z.enum(["purple", "gold"]).optional(),
  }),
});

export const collections = { posts };

import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const projectCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        poster: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    })
});

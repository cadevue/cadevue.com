import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        poster: z.object ({
            src: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
        priority: z.number(),
    })
});

export const collections = {
    projects: projectCollection
}
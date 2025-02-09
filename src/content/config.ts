import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        poster: z.object ({
            src: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
        meta_description: z.string(),
        priority: z.number(),
    })
});

const articleCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        meta_description: z.string(),
        date_published: z.date(),
        date_last_updated: z.date(),
        is_published: z.boolean(),
    })
});

export const collections = {
    projects: projectCollection,
    articles: articleCollection,
}
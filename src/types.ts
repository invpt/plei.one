import { z } from "zod";

export const BlogPostSchema = z.object({
    url: z.string(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
})
export type BlogPost = z.infer<typeof BlogPostSchema>

export type BlogPostFrontmatter = {
	title: string,
	description: string,
	publishDate: string,
}

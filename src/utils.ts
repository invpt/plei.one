import type { MDXInstance } from "astro";

import type { BlogPost, BlogPostFrontmatter } from "./types";

export async function listPosts(): Promise<BlogPost[]> {
    const postFrontmatters = import.meta.glob<MDXInstance<BlogPostFrontmatter>>("./content/blog/*.mdx");

    const posts: BlogPost[] = [];
    for (const path in postFrontmatters) {
        const post = await postFrontmatters[path]!();

        if (post.frontmatter.publishDate) {
            posts.push({
                url: `/blog/${post.file.split("/")[post.file.split("/").length-1]?.split(".")[0]}`,
                title: post.frontmatter.title,
                description: post.frontmatter.description,
                publishDate: new Date(post.frontmatter.publishDate),
            });
        }
    }

    posts.sort((a, b) => b.publishDate.toISOString().localeCompare(a.publishDate.toISOString()));

    return posts;
}
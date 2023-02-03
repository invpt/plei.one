import type { APIContext } from 'astro';

import rss from '@astrojs/rss';

import { listPosts } from '../../utils';

export async function get(context: APIContext) {
  return await rss({
    title: 'plei.one blog',
    description: 'A personal technology blog',
    site: context.site!.toString(),
    items: (await listPosts()).map(post => ({
      link: post.url,
      title: post.title,
      pubDate: post.publishDate,
      description: post.description,
    })),
    customData: `<language>en-us</language>`,
  });
}
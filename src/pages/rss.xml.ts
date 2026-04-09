import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('posts', ({ data }: any) => {
    return data.draft !== true; // Não incluir rascunhos no RSS
  });

  return rss({
    title: 'jokenpo.dev',
    description: 'Blog e Projetos de Eduardo Almeida (jokenpo)',
    site: context.site,
    items: posts.map((post: any) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}

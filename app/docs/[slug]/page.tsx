import { notFound } from 'next/navigation';

import { Mdx } from '@/app/components/mdx';

import { allProjects } from 'contentlayer/generated';
import { Header } from './header';

import './mdx.css';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const docs = allProjects.find((docs) => docs.slug === slug);

  if (!docs) {
    notFound();
  }

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <Header docs={docs} />

      <article className='px-8 py-12 mx-auto prose prose-zinc prose-quoteless lg:px-3'>
        <Mdx code={docs.body.code} />
      </article>
    </div>
  );
}

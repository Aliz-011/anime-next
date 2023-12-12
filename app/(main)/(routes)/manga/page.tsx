import { fetchManga } from '@/actions/fetch-manga';

import Hero from '@/components/hero';
import LoadMore from './_components/load-more';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manga world - SHIDARI',
  description: 'Home page with list of manga',
};

const MangaPage = async () => {
  const data = await fetchManga(1);
  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Manga</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {data}
        </section>
        <LoadMore />
      </main>
    </>
  );
};

export default MangaPage;

import { fetchAnime } from '@/actions/fetch-anime';
import Hero from '@/components/hero';

import LoadMore from './_components/load-more';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime world - SHIDARI',
  description: 'Home page with list of anime',
};

const RootPage = async () => {
  const data = await fetchAnime(1);
  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {data}
        </section>
        <LoadMore />
      </main>
    </>
  );
};

export default RootPage;

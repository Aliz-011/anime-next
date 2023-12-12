'use client';

import { fetchManga } from '@/actions/fetch-manga';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

let page = 2;

export type AnimeCard = JSX.Element;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchManga(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Loader2 size={56} className="animate-spin text-rose-600" />
        </div>
      </section>
    </>
  );
};

export default LoadMore;

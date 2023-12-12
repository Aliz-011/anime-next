import MangaCard, { MangaProp } from '@/components/manga-card';

export const fetchManga = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=8&order=ranked`
  );

  const data = await response.json();

  return data.map((item: MangaProp, index: number) => (
    <MangaCard key={item.id} manga={item} index={index} />
  ));
};

export const getMangaDetail = async (id: number) => {
  const res = await fetch(`https://shikimori.one/api/mangas/${id}`);
  const data = await res.json();

  return data;
};

export const getSimiliar = async (id: number) => {
  const res = await fetch(`https://shikimori.one/api/mangas/${id}/similar`);
  const data = await res.json();

  return data;
};

export const getComments = async (id: number) => {
  const res = await fetch(
    `https://shikimori.one/api/mangas/${id}/topics?limit=10`
  );
  const data = await res.json();

  return data;
};

import AnimeCard, { AnimeProp } from '@/components/anime-card';

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=ranked`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const searchAnime = async (query: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?search=${query}&order=popularity&limit=50`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const getAnimeDetail = async (id: number) => {
  const res = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await res.json();

  return data;
};

export const getSimiliar = async (id: number) => {
  const res = await fetch(`https://shikimori.one/api/animes/${id}/similar`);
  const data = await res.json();

  return data;
};

export const getComments = async (id: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes/${id}/topics?limit=10`
  );
  const data = await res.json();

  return data;
};

import MangaCard, { MangaProp } from '@/components/manga-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Related = async ({ data }: { data: MangaProp[] }) => {
  return (
    <div className="relative p-4">
      <div className="flex flex-col gap-y-4 my-8">
        <h1 className="text-2xl font-semibold text-white">Similiar Anime</h1>
        <p className="text-sm text-muted">
          Check out these animes that you might like.
        </p>
      </div>
      <ScrollArea>
        <div className="flex gap-x-8 pb-4">
          {data?.map((manga: MangaProp, index: number) => (
            <MangaCard key={manga.id} manga={manga} index={index} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Related;

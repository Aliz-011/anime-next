import { Layers3, Star } from 'lucide-react';
import Image from 'next/image';

import { MotionDiv } from './motion-div';
import Link from 'next/link';

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimeCard = ({ anime, index }: Prop) => {
  return (
    <Link href={`/${anime.id}`}>
      <MotionDiv
        variants={variants}
        animate="visible"
        initial="hidden"
        transition={{
          delay: index * 0.25,
          ease: 'easeInOut',
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="max-w-[18vw] rounded relative min-w-[18vw] w-full cursor-pointer"
      >
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${anime?.image?.original!}`}
            alt={anime.name}
            fill
            className="rounded-xl"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Layers3 size={20} className="text-rose-500" />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Star size={18} className="text-yellow-500" />

              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
};

export default AnimeCard;
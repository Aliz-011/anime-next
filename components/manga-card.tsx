import Image from 'next/image';
import Link from 'next/link';
import { Layers3, Star } from 'lucide-react';

import { MotionDiv } from './motion-div';

export interface MangaProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  volumes: number;
  chapters: number;
  aired_on: string;
  score: string;
}

interface Prop {
  manga: MangaProp;
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

const MangaCard = ({ manga, index }: Prop) => {
  return (
    <Link href={`/manga/${manga.id}`}>
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
            src={`https://shikimori.one${manga?.image?.original!}`}
            alt={manga.name}
            fill
            className="rounded-xl"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {manga.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {manga.kind}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <Layers3 size={20} className="text-rose-500" />
              <p className="text-base text-white font-bold">{manga.chapters}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Star size={18} className="text-yellow-500" />

              <p className="text-base font-bold text-[#FFAD49]">
                {manga.score}
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
};

export default MangaCard;

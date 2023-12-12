import Image from 'next/image';
import Link from 'next/link';

import Related from './_components/related';
import {
  getAnimeDetail,
  getComments,
  getSimiliar,
} from '@/actions/fetch-anime';
import Comments from './_components/comments';

const AnimeIdPage = async ({ params }: { params: { animeId: number } }) => {
  const anime = await getAnimeDetail(params.animeId);
  const similiar = await getSimiliar(params.animeId);
  const comments = await getComments(params.animeId);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-EN', {
      month: 'long',
      year: 'numeric',
      day: '2-digit',
    });
  };

  return (
    <>
      <div className="text-white mx-auto shadow-md overflow-hidden">
        <div className="relative flex items-center justify-center mb-4">
          <Image
            src={`https://shikimori.one${anime?.image?.original!}`}
            alt={anime?.name}
            width={50}
            height={50}
            className="rounded w-auto h-[57vh]"
          />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold">{anime?.name}</h1>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: anime?.description_html }}
          />
          <div className="mt-4">
            <p className="capitalize">
              Kind:&nbsp;
              <span className="uppercase">{anime?.kind}</span>
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Status:</span>{' '}
              {anime?.status}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Score:</span>{' '}
              {anime?.score}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">
                Episodes Aired:
              </span>{' '}
              {anime?.episodes_aired}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Aired On:</span>{' '}
              {formatDate(anime?.aired_on)}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Released On:</span>{' '}
              {formatDate(anime?.released_on)}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Rating:</span>{' '}
              {anime?.rating}
            </p>
            <div className="mt-2">
              <span className="font-semibold text-gray-300">Genres:</span>{' '}
              {anime?.genres.map((genre: any) => genre.name).join(', ')}
            </div>

            <div className="mt-4">
              <span className="font-semibold text-gray-300">Screenshots:</span>
              <div className="flex mt-2">
                {anime?.screenshots.map((screenshot: any, index: number) => (
                  <Image
                    key={index}
                    width={50}
                    height={75}
                    className="mr-2 object-cover object-center w-[30vh] h-[30vh]"
                    src={`https://shikimori.one${screenshot.original}`}
                    alt={`Screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Link
            href={`https://shikimori.one/${anime?.url}`}
            target="_blank"
            className="block mt-4 text-sm font-semibold text-blue-400"
          >
            View Details
          </Link>
        </div>
      </div>
      <Related data={similiar} />
      <Comments data={comments} />
    </>
  );
};

export default AnimeIdPage;

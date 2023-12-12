import Image from 'next/image';
import Link from 'next/link';

import Related from './_components/related';
import {
  getComments,
  getMangaDetail,
  getSimiliar,
} from '@/actions/fetch-manga';
import Comments from './_components/comments';

const MangaIdPage = async ({ params }: { params: { mangaId: number } }) => {
  const manga = await getMangaDetail(params.mangaId);
  const similiar = await getSimiliar(params.mangaId);
  const comments = await getComments(params.mangaId);

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
            src={`https://shikimori.one${manga?.image?.original!}`}
            alt={manga?.name}
            width={50}
            height={50}
            className="rounded w-auto h-[57vh]"
          />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold">{manga?.name}</h1>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: manga?.description_html }}
          />
          <div className="mt-4">
            <p className="capitalize">
              Kind:&nbsp;
              <span className="capitalize">{manga?.kind}</span>
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Status:</span>{' '}
              {manga?.status}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Score:</span>{' '}
              {manga?.score}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Volumes:</span>{' '}
              {manga?.volumes}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Chapters:</span>{' '}
              {manga?.chapters}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Aired On:</span>{' '}
              {formatDate(manga?.aired_on)}
            </p>
            <p className="capitalize">
              <span className="font-semibold text-gray-300">Released On:</span>{' '}
              {formatDate(manga?.released_on)}
            </p>
            <div className="mt-2">
              <span className="font-semibold text-gray-300">Genres:</span>{' '}
              {manga?.genres.map((genre: any) => genre.name).join(', ')}
            </div>
          </div>
          <Link
            href={`https://shikimori.one${manga?.url}`}
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

export default MangaIdPage;

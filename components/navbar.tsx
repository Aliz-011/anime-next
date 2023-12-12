'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import qs from 'query-string';

import { Input } from './ui/input';
import { Button } from './ui/button';

const Navbar = () => {
  const [query, setQuery] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: {
          q: query,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    if (!query) {
      return;
    }
    router.push(url);
    setQuery('');
  };
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-rose-700 mb-3">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <Link
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            href="/"
          >
            SHIDARI
          </Link>
        </div>
        <div className="lg:flex flex-grow items-center w-full">
          <ul className="flex flex-col lg:flex-row list-none ml-auto items-center gap-x-4">
            <li>
              <Link href="/manga" className="text-white">
                Manga
              </Link>
            </li>
            <li className="nav-item">
              <form onSubmit={onSubmit} className="flex items-center gap-x-2">
                <Input
                  type="text"
                  value={query || ''}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search anime..."
                  className="bg-white"
                />
                <Button size="icon" className="px-2">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

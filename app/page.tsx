import { Suspense } from 'react';

import { getPokemon, getPokemonById } from '../data/data';
import CardResultsList from './components/cards-list';
import CardsLoadingSkeleton from './components/cards-loading-skeleton';
import Pagination from './components/pagination';
import { notFound } from 'next/navigation';

interface PokemonProps {
  start: number;
  maxItemsPerPage: number;
}

interface HomeProps {
  searchParams?: { 
    page?: string 
  }
}

async function Pokemon({ start, maxItemsPerPage }: PokemonProps) {
    const pokemon = await getPokemon(start, maxItemsPerPage);
    if(!pokemon.results?.length) {
      notFound();
    }
    const cards = await Promise.all(pokemon.results.map(async (p) => await getPokemonById(p.name)))
    return (
      <>
        <CardResultsList cards={cards} />
        <Pagination totalResults={pokemon.count} maxPerPage={maxItemsPerPage} />
      </>
    )
}

export default function Home({ searchParams }: HomeProps) { 
  let page = 1;
  let maxItemsPerPage = 9;

  !searchParams?.page ? page = 1 : page = +searchParams.page;

  return (
    <section className="px-7 sm:p-0">
      <Suspense key={page + maxItemsPerPage} fallback={<CardsLoadingSkeleton cardsNumber={maxItemsPerPage} />}>
        <Pokemon start={(page - 1) * maxItemsPerPage} maxItemsPerPage={maxItemsPerPage} />
      </Suspense>
    </section>
  );
}

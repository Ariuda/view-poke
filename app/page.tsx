import { Suspense } from 'react';

import { getPokemon, getPokemonById } from '../data/data';
import CardResultsList from './components/cards-list';
import CardsLoadingSkeleton from './components/cards-loading-skeleton';
import Pagination from './components/pagination';
import { notFound } from 'next/navigation';

interface PokemonProps {
  start: number;
  end: number; 
  maxItemsPerPage: number;
}

interface HomeProps {
  searchParams?: { 
    go?: string 
  }
}

async function Pokemon({ start, end, maxItemsPerPage }: PokemonProps) {
    const pokemon = await getPokemon(start, end);
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
  let page = 0;
  let maxItemsPerPage = 9;

  !searchParams?.go ? page = 0 : page = +searchParams.go;

  return (
    <section className="px-7 sm:p-0">
      <Suspense key={page + maxItemsPerPage} fallback={<CardsLoadingSkeleton cardsNumber={maxItemsPerPage} />}>
        <Pokemon start={page * maxItemsPerPage} end={page * maxItemsPerPage + maxItemsPerPage} maxItemsPerPage={maxItemsPerPage} />
      </Suspense>
    </section>
  );
}

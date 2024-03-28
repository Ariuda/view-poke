import { Suspense } from 'react';

import { getPokemon, getPokemonById } from '../data/data';
import CardResultsList from './components/cards-list';
import CardsLoadingSkeleton from './components/cards-loading-skeleton';
import Pagination from './components/pagination';

async function Pokemon({ start, end }: any) {
    const pokemon = await getPokemon(start, end);
    const cards = await Promise.all(pokemon.results.map(async (p: any) => await getPokemonById(p.name)))
    return <CardResultsList cards={cards} />
}

export default function Home({ searchParams }: { searchParams?: { go?: string; query?: string } }) { 
  let page = 0;
  let maxItemsPerPage = 9;

  if(!searchParams?.go) {
    page = 0;
    maxItemsPerPage = 9;
  } else {
    page = +searchParams.go;
  }

  return (
    <section>
      <Suspense key={page + maxItemsPerPage} fallback={<CardsLoadingSkeleton cardsNumber={maxItemsPerPage} />}>
        <Pokemon start={page * maxItemsPerPage} end={page * maxItemsPerPage + maxItemsPerPage} />
        <Pagination totalResults={1302} maxPerPage={maxItemsPerPage} />
      </Suspense>
    </section>
  );
}

import { getPokemon, getPokemonById } from '../data/data';
import CardResultsList from './components/cards-list';

async function Pokemon() {
    const pokemon = await getPokemon();
    const cards = await Promise.all(pokemon.map(async (p: any) => await getPokemonById(p.name)))
    
    return <CardResultsList cards={cards} />

}

export default function Home() {    
  return (
    <main>
      <Pokemon />
    </main>
  );
}

export interface PokeApiResult {
    count: number;
    next: string;
    previous: null | string; // check this one
    results: PokeApiSingleResult[]
}

export interface PokeApiSingleResult {
    name: string;
    url: string;
}

export async function getPokemon() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9').then(res => res.json());    
    return data.results;
}

export async function getPokemonById(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json());
    return res;
}
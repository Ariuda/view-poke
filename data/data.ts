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

export async function getPokemon(start: number, end: number) {
    //await new Promise((resolve) => setTimeout(resolve, 10000000));
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${start}limit=${end}`).then(res => res.json()).catch(err => console.log(err));   
    return data;
}

export async function getPokemonById(name: string) {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()).catch(err => console.log(err));
    return res;
}

export async function getSpeciesDetail(name: string) {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res => res.json()).catch(err => console.log(err));
    return res;
}
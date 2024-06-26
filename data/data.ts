export interface PokeApiResult {
    count: number;
    next: null | string;
    previous: null | string; // check this one
    results: PokeApiSingleResult[]
}

export interface PokeApiSingleResult {
    name: string;
    url: string;
}

// In a prod application I would type
// every result, in all cases below I have only typed
// the relevant fields

export interface PokeApiByIdResult {
    img: any;
    height: number;
    id: number;
    moves: {
        move: {
            name: string;
            url: string;
        }
    }[];
    name: string;
    species: {
        name: string;
    };
    sprites: {
        other: {
            ['official-artwork']: {
                front_default: string | null;
            }
        }
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[];
    types: {
        type: {
            name: string;
        }
    }[];
    weight: number;
}

export interface PokeApiBySpeciesResult {
    base_happiness: number;
    evolution_chain: {
        url: string;
    };
    capture_rate: number;
    color: {
        name: string;
    };
    growth_rate: {
        name: string;
    };
    habitat: {
        name: string
    };
} 

interface PokeApiResultEvolvesTo {
    species: {
        name: string,
    }
    evolves_to: PokeApiResultEvolvesTo[]
}

export interface PokeApiEvolutionResult {
    chain: {
        evolves_to: PokeApiResultEvolvesTo[],
        species: {
            name: string;
        }
    }
}

export async function getPokemon(start: number, end: number): Promise<PokeApiResult> {
    //await new Promise((resolve) => setTimeout(resolve, 10000000));
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${end}`).then(res => res.json()).catch(err => console.log(err));   
    return data;
}

export async function getPokemonById(name: string): Promise<PokeApiByIdResult> {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()).catch(err => console.log(err));
    return res;
}

export async function getSpeciesDetail(name: string): Promise<PokeApiBySpeciesResult> {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res => res.json()).catch(err => console.log(err));
    return res;
}

export async function getEvolutionDetails(url: string): Promise<PokeApiEvolutionResult> {
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(url).then(res => res.json()).catch(err => console.log(err));
    return res;
}
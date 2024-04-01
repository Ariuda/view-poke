import { PokeApiEvolutionResult, getEvolutionDetails, getPokemonById } from "@/data/data";
import Image from "next/image";

import fallbackImg from '@/assets/fallback.png';
import Link from "next/link";
import { notFound } from "next/navigation";

interface EvolutionDetailsProps {
    url: string;
    name: string;
}

function extractEvolutionChain(data: PokeApiEvolutionResult) {
    let chain = [];
    let curr = data.chain;
    do {
        chain.push(curr.species.name);
        curr = curr.evolves_to[0];
    } while (curr)

    return chain;
}

async function EvolutionData({ url, name }: EvolutionDetailsProps) {
    const response = await getEvolutionDetails(url);
    if(!response) {
        return notFound();
    };

    let evolutionChain = extractEvolutionChain(response);

    const currPokemonIndex = evolutionChain.findIndex(el => el === name);

    if (evolutionChain.length === 1) {
        return null;
    }

    const evData = await Promise.all(evolutionChain.map(async (e, index) => {
        const data = await getPokemonById(e); 
        if(index !== currPokemonIndex) {
            return {
                index,
                data
            }
        } else {
            return { index };
        }
        
    }));

    const renderedEvolutionChain = evData.map(e => {
        const data = e.data;
        if(data) {
            const img = data.sprites?.other?.['official-artwork']?.front_default || fallbackImg;
            return <div key={data.id}>
                <div className="text-center">
                    <Image src={img} alt={`${data.name && data.name} image`} width={150} height={150} style={{objectFit: "contain"}} priority />
                    <p className="text-sm mt-4">{e.index < currPokemonIndex ? 'Evolves from' : 'Evolves to'}</p>
                    {data.name && <p className="text-lg capitalize">{data.name}</p>}
                    {data.name && <Link className="underline mt-8" href={`/${data.name}`}>See more</Link>}
                </div>
                
            </div>
        } else {
            return null;
        }
    })

    return (
        <div>
            <h2 className="text-lg my-2 font-medium">Evolution chain</h2>
            <div className="flex justify-evenly mt-8">
                {renderedEvolutionChain}
            </div>
        </div>
    )
}

export default function EvolutionDetails({ url, name }: EvolutionDetailsProps) {
    return (
        <div className="mt-8">
            <EvolutionData url={url} name={name} />
        </div>
    )
}
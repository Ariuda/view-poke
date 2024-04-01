import Image from "next/image";
import { Table } from "@radix-ui/themes";
import { Fragment, Suspense } from "react";

import fallbackImg from '@/assets/fallback.png';
import { getPokemonById } from "@/data/data";
import Slideshow from "../components/slideshow";
import Details from '../components/details';
import LoadingSpinner from "../components/loading-spinner";
import ProgressBar from "../components/progress-bar";
import classes from './page.module.css';
import { notFound } from "next/navigation";

interface ViewPokemonByIdProps {
    params: {
        id: string;
    }
}

export default async function ViewPokemonById({ params }: ViewPokemonByIdProps) {
    const urlId = params.id;
    const pokemon = await getPokemonById(urlId);
    if(!pokemon) {
        notFound();
    }
    const { sprites, name, id, types, moves, stats, height, weight } = pokemon;
    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;
    const img = sprites?.other?.['official-artwork']?.front_default || fallbackImg;

    const allMoves = moves.map(m => {
        return m.move.name;
    });

    const allStats = stats.map(s => {
        return {
            label: s.stat.name,
            value: (s.base_stat * 100) / 255
        }
    });

    return (
        <div className="container sm:px-4">
            {name && <h1 className="text-3xl text-center sm:text-left capitalize mb-6">{name}</h1>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-16">
                <div className="w-full">
                    <div className="relative flex justify-center sm:mb-8">
                        <Image src={img} alt={`${name && name} image`} style={{width: "auto"}} height={384} width={384} priority />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex justify-between">
                            {pokedexNum && <div>
                                <h2 className="text-lg my-2 font-medium">Number</h2>
                                <p>{pokedexNum}</p>
                            </div>}
                            {type && <div>
                                <h2 className="text-lg my-2 font-medium">Type</h2>
                                <p className={`capitalize p-2 rounded text-white text-center ${classes[type]}`}>{type}</p>
                            </div>}
                        </div>
                        <div className="flex justify-between mt-8">
                            {height && <div>
                                <h2 className="text-lg my-2 font-medium">Height</h2>
                                <p>{height * 10} cm</p>
                            </div>}
                            {weight && <div>
                                <h2 className="text-lg my-2 font-medium">Weight</h2>
                                <p>{weight / 10} kg</p>
                            </div>}
                        </div>
                    </div>
                    {allMoves.length && <div className="mt-8">
                        <h2 className="text-lg my-2 font-medium">Moves</h2>
                        <Slideshow items={allMoves} />
                    </div>}
                </div>
                <div>
                    {allStats.length && <div className="mt-8">
                        <h2 className="text-lg my-2 font-medium">Stats</h2>
                        <ProgressBar items={allStats} />
                    </div>}
                    {name && <div className="mt-8">
                        <Suspense fallback={<LoadingSpinner />}>
                            <Details name={name}  />
                        </Suspense> 
                    </div>}  
                </div>
            </div>
        </div>
    )
}

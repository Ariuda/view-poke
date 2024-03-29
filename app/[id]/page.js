import Image from "next/image";
import { Table } from "@radix-ui/themes";
import { Fragment, Suspense } from "react";

import { getPokemonById } from "@/data/data";
import Slideshow from "../components/slideshow";
import Details from '../components/details';
import LoadingSpinner from "../components/loading-spinner";
import classes from './page.module.css';

export default async function ViewPokemonById({ params }) {
    const urlId = params.id;
    const pokemon = await getPokemonById(urlId);
    const { sprites, name, id, types, moves, stats } = pokemon;
    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;

    const allMoves = moves.map(m => {
        return m.move.name;
    });

    const allStats = stats.map(s => {
        return (
                    <Fragment key={s.stat.name}>
                        <Table.Row align="center">
                        <Table.RowHeaderCell>{s.stat.name}</Table.RowHeaderCell>
                        <Table.Cell justify="center">{s.effort}</Table.Cell>
                        <Table.Cell justify="center">{s.base_stat}</Table.Cell>
                        </Table.Row>
                    </Fragment>
                )
    });

    return (
        <div className="container px-4">
            <h1 className="text-3xl text-left capitalize mb-6">{name}</h1>
            <div className="grid grid-cols-2 gap-16">
                <div className="w-full">
                    <div className="relative min-h-80 flex justify-center mb-8">
                        <Image src={sprites?.other?.['official-artwork']?.front_default} alt="pokemon" height={384} width={384} priority />
                    </div>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Details name={name} type={type}  />
                    </Suspense> 
                </div>
                <div>
                <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg my-2 font-medium">Number</h2>
                            <p>{pokedexNum}</p>
                        </div>
                        <div>
                            <h2 className="text-lg my-2 font-medium">Type</h2>
                            <p className={`capitalize p-2 rounded text-white ${classes[type]}`}>{type}</p>
                        </div>
                        
                    </div>
                    <div className="mt-8">
                        <h2 className="text-lg font-medium">Moves</h2>
                        <Slideshow items={allMoves} />
                    </div>
                    
                
                    <div className="mt-8">
                        <h2 className="text-lg my-2 font-medium">Stats</h2>
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell justify="center">Effort</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell justify="center">Base Stat</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {allStats}
                            </Table.Body>
                        </Table.Root>
                    </div>
                
                   
                </div>
            </div>
        </div>
    )
}


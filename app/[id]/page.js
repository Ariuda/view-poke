import Image from "next/image";
import { Table, Badge } from "@radix-ui/themes";
import { Fragment, Suspense } from "react";

import { getPokemonById } from "@/data/data";
import Slideshow from "../components/slideshow";
import Details from '../components/details';

export default async function ViewPokemonById({ params }) {
    const urlId = params.id;
    const pokemon = await getPokemonById(urlId);
    const { sprites, name, id, types, moves, weight, stats } = pokemon;
    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;

    const allMoves = moves.map(m => {
        return m.move.name;
    });

    const allStats = stats.map(s => {
        return (
                    <Fragment key={s.stat.name}>
                        <Table.Row>
                        <Table.RowHeaderCell>{s.stat.name}</Table.RowHeaderCell>
                        <Table.Cell>{s.effort}</Table.Cell>
                        <Table.Cell>{s.base_stat}</Table.Cell>
                        </Table.Row>
                    </Fragment>
                )
    });

    return (
        <div className="container px-4">
            <div className="flex justify-between items-center mb-8">
                <Badge color="gray" variant="soft" size="3" highContrast>{type}</Badge>
                <h1 className="text-3xl capitalize mx-8">{name}</h1>
                <Badge color="gray" variant="soft" size="3" highContrast>{pokedexNum}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full">
                    <div className="relative w-5/6 h-5/6">
                        <Image src={sprites.other['official-artwork'].front_default} alt="pokemon" fill sizes="100%" priority />
                    </div>
                    <Suspense fallback={<p>loading...</p>}>
                        <Details name={name} />
                    </Suspense>
                </div>
                
                <div>
                <h2 className="text-lg my-8">Moves</h2>
                    <Slideshow items={allMoves} />

                <h2 className="text-lg my-8">Stats</h2>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Effort</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Base Stat</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {allStats}
                        </Table.Body>
                    </Table.Root>
                </div>
            </div>
        </div>
    )
}


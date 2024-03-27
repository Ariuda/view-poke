import Image from "next/image";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";

import classes from './card.module.css';

export default function Card({ item }: any) {
    const { sprites, name, id, types } = item;

    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className={`${classes[type]} ${classes.top50} absolute bottom-0 left-0 right-0`}></div>
            <div className="z-10 w-full p-4">
                <div className="flex justify-between">
                    <Badge color="gray" variant="soft">{pokedexNum}</Badge>
                    <Badge color="gray" variant="soft">{type}</Badge>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={sprites.other['official-artwork'].front_default} alt="pokemon" width={100} height={100} priority />
                    <h1 className="text-white text-lg capitalize">{name}</h1>
                    <Link className="text-white underline" href={`/${id}`}>See more</Link>
                </div>
                
            </div>
            
        </div>
    )
}
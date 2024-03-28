import Image from "next/image";
import Link from "next/link";
import { Badge, Card, Avatar, Flex, Text } from "@radix-ui/themes";

import classes from './card.module.css';

export default function CardComponent({ item }: any) {
    const { sprites, name, id, types } = item;

    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;

    return (
        <Card variant="classic">
            <Flex direction="column" gap="3" align="center">
                <Flex gap="3" align="center" justify="between" width="100%">
                    <Badge color="gray" variant="soft" highContrast>{pokedexNum}</Badge>
                    <Badge color="gray" variant="soft" highContrast>{type}</Badge>
                </Flex>
                <Image src={sprites.other['official-artwork'].front_default} alt="pokemon" width={100} height={100} priority />
                <Text as="p" size="6" weight="bold">
                    {name}
                </Text>
                <Link className="underline" href={`/${name}`}>See more</Link>
                </Flex>
        </Card>
    )
}
import Image from "next/image";
import Link from "next/link";
import { Badge, Card, Flex, Text } from "@radix-ui/themes";

import blankFfallbackImg from '@/assets/fallback-blank.png';
import { PokeApiByIdResult } from '@/data/data';

export default function CardComponent(props: PokeApiByIdResult) {

    const { sprites, name, id, types } = props;

    const img = sprites.other?.['official-artwork']?.front_default || blankFfallbackImg;
    const pokedexNum = id.toString().length > 1 ? (id.toString().length === 2 ? `#0${id}` : `#${id}`) : `#00${id}`;
    const type = types[0].type.name;

    return (
        <Card variant="classic">
            <Flex direction="column" gap="3" align="center">
                <Flex gap="3" align="center" justify="between" width="100%">
                    {pokedexNum && <Badge color="gray" variant="soft" highContrast>{pokedexNum}</Badge>}
                    {type && <Badge color="gray" variant="soft" highContrast>{type}</Badge>}
                </Flex>
                <Image src={img} alt={`${name && name} image`} style={{width: "auto"}} width={100} height={100} priority />
                {name && <Text as="p" size="6" weight="bold" style={{ textTransform: 'capitalize' }}>
                    {name}
                </Text>}
                {name && <Link className="underline" href={`/${name}`}>See more</Link>}
                </Flex>
        </Card>
    )
}
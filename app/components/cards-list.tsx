'use client';

import Card from "./card";
import { PokeApiByIdResult } from '@/data/data';

interface CardResultsListProps {
    cards: PokeApiByIdResult[]
}

export default function CardResultsList({ cards }: CardResultsListProps) {

    return (
        <>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2">
                {cards.map(card => {
                    return (
                        <li key={card.id}>
                            <Card {...card} />
                        </li>
                    )
                })}
            </ul>
        </>
        
    )
}
'use client';

import { useState } from "react";

import Card from "./card";

interface CardResultsListProps {
    cards: any[]
}

export default function CardResultsList({ cards }: CardResultsListProps) {
    const [start, setStart] = useState(0);
    const max = 9;

    return (
        <>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2">
                {cards.slice(start, start + max).map(card => {
                    return (
                        <li key={card.id}>
                            <Card item={card} />
                        </li>
                    )
                })}
            </ul>
        </>
        
    )
}
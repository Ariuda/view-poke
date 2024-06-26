'use client';

import { Badge, Button } from "@radix-ui/themes";
import { useState } from "react";

import classes from './slideshow.module.css';

interface SlideshowProps {
    items: string[];
}

export default function Slideshow({ items }: SlideshowProps) {
    const [startIndex, setStartIndex] = useState(0)
    const maxItems = 4;

    const renderedItems = items.slice(startIndex, startIndex + maxItems).map(item => {
        return <li key={item} className={`m-2 ${classes.item}`}>
                    <Badge color="gray" variant="soft" size="3" highContrast>
                        {item}
                    </Badge>
                </li>
    });

    return (
        <div className="flex items-center justify-between w-full">
            <Button variant="outline" color="gray" highContrast disabled={startIndex === 0} onClick={() => setStartIndex(startIndex - maxItems)}>&lt;</Button>
            <ul className={`flex mx-4 flex-wrap justify-center items-center min-h-36 md:min-h-44 lg:min-h-28 ${classes.slideshow}`}>
                {renderedItems}
            </ul>
            <Button variant="outline" color="gray" highContrast disabled={(startIndex + maxItems) >= items.length} onClick={() => setStartIndex(startIndex + maxItems)}>&gt;</Button>
        </div>
    )
}
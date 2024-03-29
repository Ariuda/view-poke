'use client';

import { Badge, Button } from "@radix-ui/themes";
import { useState } from "react";

export default function Slideshow({ items }: any) {
    const [startIndex, setStartIndex] = useState(0)
    const maxItems = 3;

    const renderedItems = items.slice(startIndex, startIndex + maxItems).map((item: any) => {
        return <li key={item} className="m-2">
                    <Badge color="gray" variant="soft" size="3" highContrast>
                        {item}
                    </Badge>
                </li>
    });

    return (
        <div className="flex items-center justify-between w-full">
            <Button variant="outline" color="gray" highContrast disabled={startIndex === 0} onClick={() => setStartIndex(startIndex - 9)}>&lt;</Button>
            <ul className="flex mx-4">
                {renderedItems}
            </ul>
            <Button variant="outline" color="gray" highContrast disabled={startIndex >= Math.floor(items.length / maxItems)} onClick={() => setStartIndex(startIndex + 9)}>&gt;</Button>
        </div>
    )
}
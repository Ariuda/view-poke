'use client';

import { Badge, Button } from "@radix-ui/themes";
import { useState } from "react";

export default function Slideshow({ items }: any) {
    const [startIndex, setStartIndex] = useState(0)
    const maxItems = 9;

    const renderedItems = items.slice(startIndex, startIndex + maxItems).map((item: any) => {
        return <li key={item} className="m-2">
                    <Badge color="gray" variant="soft" size="3" highContrast>
                        {item}
                    </Badge>
                </li>
    });

    return (
        <div className="flex items-center">
            <Button variant="outline" color="gray" highContrast onClick={() => setStartIndex(startIndex - 9)}>&lt;</Button>
            <ul className="flex mx-4 flex-wrap">
                {renderedItems}
            </ul>
            <Button variant="outline" color="gray" highContrast onClick={() => setStartIndex(startIndex + 9)}>&gt;</Button>
        </div>
    )
}
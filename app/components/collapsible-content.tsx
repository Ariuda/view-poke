'use client';

import React, { useState } from "react";

interface CollapsibleContentProps {
    label: string;
    children: JSX.Element
}

export default function CollapsibleContent({ label, children }: CollapsibleContentProps) {
    const [showContent, setShowContent] = useState<boolean>(false);

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-lg my-4 font-medium">{label}</h2>
                <button onClick={() => setShowContent(!showContent)}>show</button>
            </div>
            {showContent && <div>
                {children}
            </div>}
        </div>
    )
}
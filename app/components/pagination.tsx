'use client';

import { Button } from "@radix-ui/themes";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface PaginationProps {
    totalResults: number;
    maxPerPage: number;
}

export default function Pagination({ totalResults, maxPerPage }: PaginationProps) {
    const maxNumOfPages = Math.ceil(totalResults / maxPerPage);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const existingPage = params.get('page') || 1;

    const pathname = usePathname();
    const { replace } = useRouter();

    const [page, setPage] = useState(+existingPage);


    function handleClick(goTo: number) {
        
        if(goTo) {
            const nextPage = page + goTo;
            setPage(nextPage)
            params.set('page', nextPage.toString());
        } 
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="fixed top-1/2 left-0 right-0 bottom-1/2">
            <div className="absolute top-1/2 left-2">
                <Button variant="outline" color="gray" highContrast disabled={page === 1} onClick={() => handleClick(-1)}>&lt;</Button>
            </div>
            <div className="absolute top-1/2 right-2">
                <Button variant="outline" color="gray" highContrast disabled={page >= maxNumOfPages} onClick={() => handleClick(1)}>&gt;</Button>
            </div>
        </div>
    )
}
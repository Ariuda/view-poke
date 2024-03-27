'use client';

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TextField } from "@radix-ui/themes";

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();

    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event: any) {
        setSearchTerm(event.target.value);
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        params.set('query', searchTerm);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search pokemon..." onChange={handleChange} />
            </form>
            
        </div>
    )
}
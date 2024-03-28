'use client';

import { useState } from "react";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import { TextField } from "@radix-ui/themes";

export default function SearchBar() {
    const searchParams = useSearchParams();
    //const pathname = usePathname();
    //const params = new URLSearchParams(searchParams);
    const { push } = useRouter();

    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event: any) {
        setSearchTerm(event.target.value);
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        setSearchTerm('');
        push(`/${searchTerm}`);
    }

    return (
        <div className="w-full sm:w-4/12">
            <form onSubmit={handleSubmit}>
                
                <TextField.Root placeholder="Search pokemon..." onChange={handleChange} value={searchTerm}>
                    <TextField.Slot>
                        
                    </TextField.Slot>
                </TextField.Root>
            </form>
            
        </div>
    )
}
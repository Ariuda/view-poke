'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@radix-ui/themes";

export default function SearchBar() {
    const { push } = useRouter();

    const [searchTerm, setSearchTerm] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSearchTerm('');
        push(`/${searchTerm}`);
    }

    return (
        <div className="w-full sm:w-4/12">
            <form onSubmit={handleSubmit}>
                
                <TextField.Root placeholder="Search pokemon..." onChange={handleChange} value={searchTerm}>
                    <TextField.Slot></TextField.Slot>
                </TextField.Root>
            </form>
            
        </div>
    )
}
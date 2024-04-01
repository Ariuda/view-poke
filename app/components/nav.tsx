import Link from "next/link";

import SearchBar from "./search-bar";

export default function Nav() {
    return (
        <nav className="bg-red-600 p-2 flex flex-col sm:flex-row justify-between">
            <Link href="/">
                <h1 className="text-white text-center sm:text-left text-2xl mb-2 sm:mb-0">Pokemon!</h1>
            </Link>
            <SearchBar />
        </nav>
    )
}
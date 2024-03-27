

import SearchBar from "./search-bar"

export default function Nav() {
    return (
        <nav className="bg-red-600 p-2 flex justify-between mb-5 sm:mb-16 md:mb-20">
            <h1 className="text-white text-2xl">Pokemon!</h1>
            <SearchBar />
        </nav>
    )
}
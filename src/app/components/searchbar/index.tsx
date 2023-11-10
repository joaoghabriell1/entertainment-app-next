"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
import IconSearch from "../../assets/icon-search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const url = usePathname();

  const isMoviePage = url.includes("movies");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/search?query=${query}&page=1${isMoviePage ? "&isMovie=isMovie" : ""}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 px-4">
      <Image className="w-6" src={IconSearch} alt="search bar icon" />
      <input
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder={`Search for your favorite ${
          isMoviePage ? "movie" : "Tv show"
        }!`}
        className="w-full bg-transparent text-white p-2  outline-none"
        type="text"
      />
    </form>
  );
};

export default SearchBar;

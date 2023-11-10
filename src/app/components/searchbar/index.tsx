"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import IconSearch from "../../assets/icon-search.svg";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${query}&page=1`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 px-4">
      <Image className="w-6" src={IconSearch} alt="search bar icon" />
      <input
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Search for your favorite movie!"
        className="w-full bg-transparent text-white p-2  outline-none"
        type="text"
      />
    </form>
  );
};

export default SearchBar;

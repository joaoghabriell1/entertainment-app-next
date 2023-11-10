"use client";

import { usePathname } from "next/navigation";

const MediaInfo = (props: Partial<Movie>) => {
  const year = new Date(props.release_date!).getFullYear();
  const isMoviePage = usePathname().includes("movie");

  return (
    <ul className="flex gap-2 text-sm text-slate-400 mt-2">
      <li>{year}</li>
      <span>&#x2022;</span>
      <li>{isMoviePage ? "Movie" : "Tv Show"}</li>
    </ul>
  );
};

export default MediaInfo;

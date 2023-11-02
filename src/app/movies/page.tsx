import React from "react";
import SearchBar from "../components/searchbar";
import TrendingMovies from "../feat/trending-movies";
import PopularMovies from "../feat/popular-movies";

const Movies = () => {
  return (
    <main className="min-h-screen bg-slate-900 lg:pl-28">
      <SearchBar />
      <TrendingMovies limit={8} />
      <PopularMovies limit={8} />
    </main>
  );
};

export default Movies;

import React from "react";
import SearchBar from "../components/searchbar";
import TrendingMovies from "../feat/trending-movies";

const Movies = () => {
  return (
    <main className="h-screen bg-slate-900">
      <TrendingMovies />
      <SearchBar />
    </main>
  );
};

export default Movies;

import SearchBar from "../components/searchbar";
import TrendingMovies from "../feat/trending-movies";
import PopularMovies from "../feat/popular-movies";

const Movies = () => {
  return (
    <main className="min-h-screen bg-slate-900 pb-4 lg:pl-28">
      <SearchBar />
    </main>
  );
};

export default Movies;

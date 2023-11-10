import SearchMovies from "../feat/search-movies";
import SearchTvShows from "../feat/tvshows/search-tvshows/iindex";
import SearchBar from "../components/searchbar";

const Search = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const query = searchParams.query;
  const page = searchParams.page;
  const isMovie = searchParams.isMovie === "isMovie";

  return (
    <section className="bg-slate-900 min-h-screen text-white pl-32">
      <SearchBar />

      {isMovie ? (
        <SearchMovies query={query} page={page} />
      ) : (
        <SearchTvShows query={query} page={page} />
      )}
    </section>
  );
};

export default Search;

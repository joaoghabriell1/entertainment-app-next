import SearchMovies from "../feat/search-movies";
import SearchTvShows from "../feat/tvshows/search-tvshows";
import SearchBar from "../components/searchbar";
import PaginationBar from "../components/pagination-bar";

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
      <PaginationBar />
      {isMovie ? (
        <SearchMovies query={query} page={page} />
      ) : (
        <SearchTvShows query={query} page={page} />
      )}
    </section>
  );
};

export default Search;

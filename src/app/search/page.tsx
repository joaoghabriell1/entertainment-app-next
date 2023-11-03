import SearchMovies from "../feat/search-movies";
import SearchBar from "../components/searchbar";

const Search = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const query = searchParams.query;
  const page = searchParams.page;

  return (
    <section className="bg-slate-900 min-h-screen text-white pl-32">
      <SearchBar />
      <SearchMovies query={query} page={page} />
    </section>
  );
};

export default Search;

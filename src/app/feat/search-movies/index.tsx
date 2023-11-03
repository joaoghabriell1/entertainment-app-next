import List from "@/app/components/list";

type Props = {
  query: string;
  page: string;
};

const SearchMovies = async ({ query, page }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/movies/search-movie?query=${query}&page=${page}`
  );

  const data: {
    data: {
      page: number;
      results: Movie[];
      total_pages: number;
      total_results: number;
    };
  } = await res.json();

  return (
    <>
      <div>
        <List
          heading={`Found ${data.data.total_results} results for "${query}"`}
          data={data.data.results}
        />
      </div>
    </>
  );
};

export default SearchMovies;

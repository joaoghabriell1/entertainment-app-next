import List from "@/app/components/list";

type Props = {
  limit?: number;
};

const TrendingMovies = async ({ limit }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/movies/trending-movies`
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
      <List
        heading="Trending Movies"
        data={limit ? data.data.results.slice(0, limit) : data.data.results}
      />
    </>
  );
};

export default TrendingMovies;

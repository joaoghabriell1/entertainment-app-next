import List from "@/app/components/list";

type Props = {
  limit?: number | null;
};

const PopularMovies = async ({ limit }: Props) => {
  const res = await fetch(`${process.env.LOCAL_API}/api/movies/popular-movies`);

  const data: {
    data: { page: number; results: Movie[] };
  } = await res.json();

  return (
    <>
      <List
        heading="Popular Movies"
        data={limit ? data.data.results.slice(0, limit) : data.data.results}
      />
    </>
  );
};

export default PopularMovies;

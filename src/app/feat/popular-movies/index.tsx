import List from "@/app/components/list";

type Props = {
  limit?: number;
};

const PopularMovies = async ({ limit }: Props) => {
  const res = await fetch(`${process.env.LOCAL_API}/api/movies/popular-movies`);

  const data: {
    data: Movie[];
  } = await res.json();

  return (
    <>
      <List
        heading="Popular Movies"
        data={limit ? data.data.slice(0, limit) : data.data}
      />
    </>
  );
};

export default PopularMovies;

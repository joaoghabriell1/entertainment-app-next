import MovieDetails from "@/app/components/movie-details";

type Props = {
  movieId: string;
};

const Movie = async ({ movieId }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/movies/movie/${movieId}`
  );

  const { data }: { data: Movie } = await res.json();

  return <MovieDetails data={data} />;
};

export default Movie;

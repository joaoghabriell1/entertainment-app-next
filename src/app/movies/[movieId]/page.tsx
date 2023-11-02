import Movie from "@/app/feat/movie";

type Params = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params: { movieId } }: Params) => {
  return (
    <section className="bg-slate-900 min-h-screen md:h-screen">
      <Movie movieId={movieId} />
    </section>
  );
};

export default MovieDetails;

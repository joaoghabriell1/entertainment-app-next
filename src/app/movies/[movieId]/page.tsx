import Movie from "@/app/feat/movie";
import SearchBar from "@/app/components/searchbar";

type Params = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params: { movieId } }: Params) => {
  return (
    <section className="bg-slate-900  min-h-screen lg:pl-40 md:h-screen">
      <SearchBar />
      <Movie movieId={movieId} />
    </section>
  );
};

export default MovieDetails;

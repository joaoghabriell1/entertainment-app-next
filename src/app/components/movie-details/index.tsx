import MovieInfo from "./movie-info";
import MoviePoster from "./movie-poster";

type Props = {
  data: Movie;
};
const MovieDetails = ({ data }: Props) => {
  return (
    <div className="text-white flex flex-col items-center mx-4 md:flex-row md:gap-8 lg:pl-28  h-full">
      <MoviePoster PosterPath={data.poster_path} />
      <MovieInfo data={data} />
    </div>
  );
};

export default MovieDetails;

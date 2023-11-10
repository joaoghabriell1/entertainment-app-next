import React from "react";
import TvShowInfo from "./tvshow-info";
import MediaPoster from "../movie-details/media-poster";

interface Props {
  TvShow: TVshow;
}

const TvShowDetails = ({ TvShow }: Props) => {
  return (
    <section className="text-white flex flex-col items-center mx-4 md:flex-row md:gap-8 md:items-start">
      <MediaPoster PosterPath={TvShow.poster_path} />
      <TvShowInfo data={TvShow} />
    </section>
  );
};

export default TvShowDetails;

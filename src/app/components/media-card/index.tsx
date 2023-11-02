import Thumbnail from "./thumbnail";
import MediaInfo from "./media-info";
import Heading from "./heading";

const MediaCard = (props: Partial<Movie>) => {
  return (
    <div className="text-white  rounded-md overflow-hidden">
      <Thumbnail backdropPath={props.backdrop_path!} />
      <MediaInfo />
      <Heading title={props.title!} />
    </div>
  );
};

export default MediaCard;

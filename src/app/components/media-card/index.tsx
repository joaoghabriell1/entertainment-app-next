import Thumbnail from "./thumbnail";
import MediaInfo from "./media-info";
import Heading from "./heading";

const MediaCard = (props: Partial<Movie>) => {
  return (
    <div className="text-white">
      <Thumbnail />
      <MediaInfo />
      <Heading />
    </div>
  );
};

export default MediaCard;

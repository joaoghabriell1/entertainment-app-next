import Link from "next/link";
import Heading from "./heading";
import Thumbnail from "./thumbnail";
import MediaInfo from "./media-info";

const MediaCard = (props: Partial<Movie>) => {
  return (
    <div className="text-white  rounded-md overflow-hidden">
      <Link href={`/movies/${props.id}`}>
        <Thumbnail backdropPath={props.backdrop_path!} />
        <MediaInfo />
        <Heading title={props.title!} />
      </Link>
    </div>
  );
};

export default MediaCard;

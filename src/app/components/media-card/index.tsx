import Link from "next/link";
import Heading from "./heading";
import Thumbnail from "./thumbnail";
import MediaInfo from "./media-info";

interface Props {
  isMovie?: boolean;
}

const MediaCard = (props: Partial<Movie> & Props) => {
  return (
    <div className="text-white overflow-hidden">
      <Link href={`/${props.isMovie ? "movies" : "tvshows"}/${props.id}`}>
        <Thumbnail backdropPath={props.backdrop_path!} />
        <MediaInfo />
        <Heading title={props.title!} />
      </Link>
    </div>
  );
};

export default MediaCard;

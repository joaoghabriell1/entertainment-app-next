import Image from "next/image";
import MockMediaThumb from "../../../assets/icon-search.svg";

const Thumbnail = ({ backdropPath }: { backdropPath: string }) => {
  return (
    <div className="rounded-xl overflow-hidde">
      <Image
        width={500}
        height={500}
        quality={100}
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt="media thumbnail"
      />
    </div>
  );
};

export default Thumbnail;

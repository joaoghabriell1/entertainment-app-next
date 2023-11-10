import Image from "next/image";

type Props = {
  PosterPath: string;
};

const MediaPoster = ({ PosterPath }: Props) => {
  return (
    <div className="max-w-xs my-4 max-h-[340px] overflow-hidden rounded-md md:max-h-none md:max-w-sm md:w-[full] md:basis-1/2 md:my-0">
      <Image
        width={500}
        height={500}
        quality={100}
        placeholder="blur"
        blurDataURL="blur"
        src={`https://image.tmdb.org/t/p/original${PosterPath}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MediaPoster;

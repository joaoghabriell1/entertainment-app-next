import IconWeb from "../../../assets/icon-we.svg";
import Image from "next/image";

interface Props {
  data: TVshow;
}

const TvShowInfo = ({ data }: Props) => {
  return (
    <>
      <div className="container_custom_scrollbar md:basis-1/2 md:max-w-md md:max-h-[600px] overflow-scroll">
        <div className="text-center border-b border-slate-500 pb-4 md:text-start">
          <h2 className="text-2xl">{data.name}</h2>
          <p className="text-slate-400">{data.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 py-4 border-b border-slate-500">
          <h3 className="text-lg">Genres</h3>

          <ul className="flex gap-2">
            {data.genres.map((genre) => {
              return (
                <li
                  key={genre.id}
                  className="list-none bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm"
                >
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-b border-slate-500 py-4">
          <ul className="flex justify-between">
            <li className="flex flex-col items-center gap-2">
              <span>Seasons</span>
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
                {data.number_of_seasons}
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span>Episodes</span>
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
                {data.number_of_episodes}
              </span>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <span>Language</span>
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
                {data.original_language}
              </span>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <span>Rating Avarage</span>
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
                {data.vote_average.toFixed(2)}
              </span>
            </li>
          </ul>
        </div>
        <div className="border-b border-slate-500 py-4">
          <h3 className="text-lg mb-2">Status</h3>
          <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
            {data.status}
          </span>
        </div>
        <div className="border-b border-slate-500 pb-4">
          <h3 className="text-lg py-4">Synopsis</h3>
          <p className="text-slate-300">{data.overview}</p>
        </div>
        <div className="flex flex-col items-start border-b border-slate-500 py-4">
          <h3 className="text-lg mb-2">Website</h3>
          <a
            className="flex bg-slate-500 bg-opacity-40 py-1 px-2 rounded-[100vh] text-sm"
            target="blank"
            href={data.homepage}
          >
            <Image
              className="max-w-[20px]"
              src={IconWeb}
              width={10}
              height={10}
              alt="web site icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default TvShowInfo;

import React from "react";

interface Props {
  data: TVshow;
}
const TvShowInfo = ({ data }: Props) => {
  return (
    <>
      <div className="md:basis-1/2 md:max-w-md">
        <div className="text-center border-b border-slate-500 pb-4 md:text-start">
          <h2 className="text-2xl">{data.name}</h2>
          <p className="text-slate-400">{data.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 py-4 border-b border-slate-500">
          <h3 className="text-lg">Genres</h3>
          <ul className="flex gap-2"></ul>
        </div>
        <div className="border-b border-slate-500 py-4">
          <ul className="flex justify-between">
            <li className="flex flex-col gap-2">
              <span>Length</span>
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
                min.
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
              <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm"></span>
            </li>
          </ul>
        </div>
        <div className="border-b border-slate-500 py-4">
          <h3 className="text-lg mb-2">Status</h3>
          <span className="bg-slate-500 bg-opacity-40 py-1 px-3 rounded-[100vh] text-sm">
            {data.status}
          </span>
        </div>
        <div>
          <h3 className="text-lg py-4">Synopsis</h3>
          <p className="text-slate-300">{data.overview}</p>
        </div>
      </div>
    </>
  );
};

export default TvShowInfo;

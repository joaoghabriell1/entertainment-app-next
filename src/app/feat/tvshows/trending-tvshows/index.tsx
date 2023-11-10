import React from "react";
import List from "@/app/components/list";

interface Props {
  limit?: number | undefined;
}

const TrendingTvShows = async ({ limit }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/tvshows/trending-tvshows`
  );

  const data: {
    data: {
      results: TVshow[];
    };
  } = await res.json();

  return (
    <div>
      <List
        heading="Trending TV Shows"
        data={limit ? data.data.results.slice(0, limit) : data.data.results}
      />
    </div>
  );
};

export default TrendingTvShows;

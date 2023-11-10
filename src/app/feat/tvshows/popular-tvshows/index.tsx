import List from "@/app/components/list";

interface Props {
  limit?: number | undefined;
}

const PopularTvShows = async ({ limit }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/tvshows/popular-tvshows`
  );

  const data: {
    data: {
      results: TVshow[];
    };
  } = await res.json();

  return (
    <>
      <List
        heading="Popular TV Shows"
        data={limit ? data.data.results.slice(0, limit) : data.data.results}
      />
    </>
  );
};

export default PopularTvShows;

import TvShowDetails from "@/app/components/tvshow-details";

type Props = {
  TvShowId: string;
};

const TvShow = async ({ TvShowId }: Props) => {
  const res = await fetch(
    `${process.env.LOCAL_API}/api/tvshows/tvshow/${TvShowId}`
  );

  const { data }: { data: TVshow } = await res.json();

  return (
    <>
      <TvShowDetails TvShow={data} />
    </>
  );
};

export default TvShow;

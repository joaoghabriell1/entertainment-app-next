import SearchBar from "@/app/components/searchbar";
import TvShow from "@/app/feat/tvshows/tvshow";

type Params = {
  params: {
    tvshowId: string;
  };
};

const TvShowDetails = ({ params: { tvshowId } }: Params) => {
  return (
    <div>
      <section className="bg-slate-900 min-h-screen lg:pl-40">
        <SearchBar />
        <TvShow TvShowId={tvshowId} />
      </section>
    </div>
  );
};

export default TvShowDetails;

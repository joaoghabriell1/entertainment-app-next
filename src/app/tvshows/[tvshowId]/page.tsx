import SearchBar from "@/app/components/searchbar";

type Params = {
  params: {
    tvshowId: string;
  };
};

const TvShow = ({ params: { tvshowId } }: Params) => {
  return (
    <div>
      <section className="bg-slate-900  min-h-screen lg:pl-40 md:h-screen">
        <SearchBar />
      </section>
    </div>
  );
};

export default TvShow;

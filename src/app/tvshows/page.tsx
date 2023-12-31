import PopularTvShows from "../feat/tvshows/popular-tvshows";
import TrendingTvShows from "../feat/tvshows/trending-tvshows";
import SearchBar from "../components/searchbar";

const TvShows = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white pb-4 lg:pl-28">
      <SearchBar />
      <PopularTvShows limit={8} />
      <TrendingTvShows limit={8} />
    </section>
  );
};

export default TvShows;

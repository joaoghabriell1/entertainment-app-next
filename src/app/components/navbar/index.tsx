import Link from "next/link";
import Image from "next/image";
import MoviesLogo from "../../assets/icon-category-movie.svg";
import TvShowsLogo from "../../assets/icon-category-tv.svg";

const Navbar = () => {
  return (
    <nav className="text-white flex-1 flex justify-center">
      <ul className="flex gap-4">
        <li>
          <Link className="gap-1 flex items-center" href="/movies">
            <Image
              className="aspect-square w-4"
              src={MoviesLogo}
              alt="movies page icon logo"
            />
            <span>Movies</span>
          </Link>
        </li>
        <li>
          <Link className="gap-1 flex items-center" href="/tvshows">
            <Image
              className="aspect-square w-4"
              src={TvShowsLogo}
              alt="TV shows page icon logo"
            />
            <span>TV Shows</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

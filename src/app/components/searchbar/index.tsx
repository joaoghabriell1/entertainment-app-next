import Image from "next/image";
import IconSearch from "../../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 px-4">
      <Image className="w-6" src={IconSearch} alt="search bar icon" />
      <input
        placeholder="Search for your favorite movie!"
        className="w-full bg-transparent text-white my-4 p-2  outline-none"
        type="text"
      />
    </div>
  );
};

export default SearchBar;

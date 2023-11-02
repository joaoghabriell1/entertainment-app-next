import ProfileIcon from "./profile-icon";
import Navbar from "../navbar";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-slate-800 flex p-4 border-0 lg:fixed lg:bottom-6 lg:top-6 lg:left-4 lg:flex-col lg:w-24 lg:rounded-lg lg:justify-center">
      <Logo />
      <Navbar />
      <ProfileIcon />
    </header>
  );
};

export default Header;

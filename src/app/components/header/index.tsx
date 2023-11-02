import ProfileIcon from "./profile-icon";
import Navbar from "../navbar";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-slate-800 flex p-4 border-0">
      <Logo />
      <Navbar />
      <ProfileIcon />
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import IconLogo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image className="lg:w-9 lg:mx-auto" src={IconLogo} alt="logo" />
    </Link>
  );
};

export default Logo;

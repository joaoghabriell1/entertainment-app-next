import Image from "next/image";
import Link from "next/link";
import IconLogo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={IconLogo} alt="logo" />
    </Link>
  );
};

export default Logo;

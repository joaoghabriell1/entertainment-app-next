import { useState, useEffect } from "react";
import Image from "next/image";
import Clapperboard from "../../assets/clapperboard.png";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
};

const ImageWithFallback = ({ alt, src, width, height, quality }: Props) => {
  const [error, setError] = useState<null | "error">(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      onError={() => setError("error")}
      src={error ? Clapperboard : src}
    />
  );
};

export default ImageWithFallback;

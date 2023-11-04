"use client";

import Image from "next/image";
import Overlay from "./overlay";
import { useState } from "react";

const Thumbnail = ({ backdropPath }: { backdropPath: string }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
      className="rounded-xl overflow-hidden relative"
    >
      {isHovered ? <Overlay /> : null}
      <Image
        width={500}
        height={500}
        quality={100}
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt="media thumbnail"
      />
    </div>
  );
};

export default Thumbnail;

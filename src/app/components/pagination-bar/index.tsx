"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";
import IconLeftArrow from "../../assets/arrow-left-5-svgrepo-com (1).svg";
import IconRightArrow from "../../assets/right-arrow-svgrepo-com.svg";

type Props = {
  total_pages: number;
};

const PaginationBar = ({ total_pages }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const actual_page = searchParams.get("page");

  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (action: string) => {
    const page =
      action == "ant"
        ? createQueryString("page", actual_page ? +actual_page - 1 : 1)
        : createQueryString("page", actual_page ? +actual_page + 1 : 1);

    router.push(pathname + "?" + page);
  };

  const pages_arr = new Array(total_pages);

  return (
    <div className="flex gap-4 items-center border self-start rounded-md ml-4 my-2">
      <button
        disabled={actual_page == "1"}
        className={
          actual_page == "1"
            ? `flex items-center text-slate-400`
            : `flex items-center`
        }
        onClick={() => handleClick("ant")}
      >
        <Image
          className="max-w-[30px] "
          src={IconLeftArrow}
          width={10}
          height={10}
          quality={100}
          alt="left arrow icon"
        />
        <span>Anterior</span>
      </button>
      <div className="border-x py-1 px-2">{actual_page}</div>
      <div className="text-slate-400">...</div>
      <div className="border-x py-1 px-2 text-slate-400">{total_pages}</div>
      <button
        disabled={actual_page == total_pages.toString()}
        className={
          actual_page == total_pages.toString()
            ? `flex items-center text-slate-400`
            : `flex items-center`
        }
        onClick={() => handleClick("prox")}
        value="prox"
      >
        <span>Próximo</span>
        <Image
          className="max-w-[30px] "
          src={IconRightArrow}
          width={10}
          height={10}
          quality={100}
          alt="left arrow icon"
        />
      </button>
    </div>
  );
};

export default PaginationBar;

"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { useCallback } from "react";

const PaginationBar = () => {
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

  return (
    <div>
      <button
        onClick={() => {
          router.push(
            pathname +
              "?" +
              createQueryString("page", actual_page ? +actual_page + 1 : 1)
          );
        }}
      >
        up1page
      </button>
    </div>
  );
};

export default PaginationBar;

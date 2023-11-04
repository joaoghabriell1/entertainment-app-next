import { NextResponse, NextRequest } from "next/server";

const SplitQuery = (query: string | null): string | null => {
  let new_query = query;

  if (query != null) {
    const arr = query.split(" ");

    if (arr.length > 1) {
      new_query = arr.join("%20");
    }
  }

  return new_query;
};

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const query = SplitQuery(url.searchParams.get("query"));
  const page = url.searchParams.get("page");

  const API_URL = `${process.env.EXTERNAL_API}/search/movie?query=${query}&page=${page}`;

  const res = await fetch(`${API_URL}`, {
    cache: "no-cache",
    headers: {
      "Content-type": "Application-json",
      Authorization: process.env.API_TOKEN as string,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return NextResponse.json({ data });
}

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const query = url.searchParams.get("query");
  const page = url.searchParams.get("page");

  const API_URL = `${process.env.EXTERNAL_API}/search/movie?query=${query}&page=${page}`;

  const res = await fetch(`${API_URL}`, {
    cache: "no-cache",
    headers: {
      "Content-type": "Application-json",
      Authorization: process.env.API_TOKEN as string,
    },
  });

  const data = await res.json();
  return NextResponse.json({ data });
}

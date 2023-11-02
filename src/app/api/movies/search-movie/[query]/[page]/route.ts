import { NextResponse, NextRequest } from "next/server";
const API_TOKEN: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDczOWMxYTcxMDU5OTIxMWVjNDAwODdjOGNlNWU0OCIsInN1YiI6IjY1MGI2MzdmYWVkZTU5MWFiMzM4OTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tR_nnHxt5WCM86ST6Zw8XYezk-of-K0Bt3AbwfgkpY";

export async function GET(
  request: NextRequest,
  { params }: { params: { query: string; page: string } }
) {
  const query = params.query;
  const page = params.page != "undefined" ? params.page : "1";

  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${
    page || "1"
  }`;

  const res = await fetch(`${API_URL}`, {
    cache: "no-cache",
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });

  const data = await res.json();
  return NextResponse.json({ data });
}

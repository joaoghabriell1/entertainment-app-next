import { chownSync } from "fs";
import { NextResponse, NextRequest } from "next/server";
const API_TOKEN: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDczOWMxYTcxMDU5OTIxMWVjNDAwODdjOGNlNWU0OCIsInN1YiI6IjY1MGI2MzdmYWVkZTU5MWFiMzM4OTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tR_nnHxt5WCM86ST6Zw8XYezk-of-K0Bt3AbwfgkpY";

export async function GET(
  request: NextRequest,
  { params }: { params: { query: string } }
) {
  const query = params.query;

  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${query}`;

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

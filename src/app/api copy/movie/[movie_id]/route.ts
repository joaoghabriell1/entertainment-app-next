import { chownSync } from "fs";
import { NextResponse } from "next/server";

const API_TOKEN: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDczOWMxYTcxMDU5OTIxMWVjNDAwODdjOGNlNWU0OCIsInN1YiI6IjY1MGI2MzdmYWVkZTU5MWFiMzM4OTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tR_nnHxt5WCM86ST6Zw8XYezk-of-K0Bt3AbwfgkpY";

export async function GET(
  request: Request,
  { params }: { params: { movie_id: string } }
) {
  const id = params.movie_id;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const res = await fetch(`${API_URL}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });

  const data = await res.json();
  return NextResponse.json({ data });
}

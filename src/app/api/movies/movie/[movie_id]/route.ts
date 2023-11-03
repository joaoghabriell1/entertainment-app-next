import { chownSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { movie_id: string } }
) {
  const id = params.movie_id;

  const API_URL = `${process.env.EXTERNAL_API}/movie/${id}`;

  const res = await fetch(`${API_URL}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: process.env.API_TOKEN as string,
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}

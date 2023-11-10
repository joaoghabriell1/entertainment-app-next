import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,
    {
      cache: "no-cache",
      headers: {
        accept: "application/json",
        Authorization: process.env.API_TOKEN as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return NextResponse.json({ data });
}

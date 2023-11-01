import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.EXTERNAL_API}/movie/popular`, {
    cache: "no-cache",
    headers: {
      "Content-type": "Application-json",
      Authorization: process.env.API_TOKEN as string,
    },
  });
  const data = await res.json();
  return NextResponse.json({ data: data.results });
}

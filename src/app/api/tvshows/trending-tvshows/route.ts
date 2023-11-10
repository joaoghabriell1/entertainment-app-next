import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.EXTERNAL_API}/trending/tv/day`, {
    cache: "no-cache",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_TOKEN as string,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  return NextResponse.json({ data });
}

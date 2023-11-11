import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white h-screen flex flex-col justify-center items-center bg-slate-900">
      <h1 className="text-4xl text-center">
        Welcome to your entertaiment app.
      </h1>
      <h2 className="text-xl text-slate-400 my-4">
        What do you want to see today?
      </h2>
      <div className="flex gap-4">
        <Link
          className="p-4 text-xl bg-slate-500 rounded-md hover:bg-opacity-75"
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="p-4 text-xl bg-slate-500 rounded-md hover:bg-opacity-75"
          href="/tvshows"
        >
          TV Shows
        </Link>
      </div>
    </main>
  );
}

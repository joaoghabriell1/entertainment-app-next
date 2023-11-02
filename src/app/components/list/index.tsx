import MediaCard from "../media-card";
import ListHeading from "./heading";

const MovieMock1: Movie = {
  adult: true,
  tagline: "string",
  id: 1,
  backdrop_path: "string",
  title: "string",
  original_language: "string",
  overview: "string",
  poster_path: "string",
  genred_ids: [{ id: 1, name: "string" }],
  popularity: 123,
  status: "string",
  release_date: "string",
  video: true,
  vote_average: 1,
  runtime: 1,
};
const MovieMock2: Movie = {
  adult: true,
  tagline: "string",
  id: 1,
  backdrop_path: "string",
  title: "string",
  original_language: "string",
  overview: "string",
  poster_path: "string",
  genred_ids: [{ id: 1, name: "string" }],
  popularity: 123,
  status: "string",
  release_date: "2023-17-11",
  video: true,
  vote_average: 1,
  runtime: 1,
};

type Props = {
  data: Movie[];
  heading: string;
};

const List = ({ data, heading }: Props) => {
  return (
    <>
      <section className="mx-4">
        <ListHeading content={heading} />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 ">
          {data?.map((media, index) => {
            return (
              <MediaCard
                id={media.id}
                poster_path={media.poster_path}
                backdrop_path={media.backdrop_path}
                release_date={media.release_date}
                overview={media.overview}
                title={media.title}
                key={index}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;

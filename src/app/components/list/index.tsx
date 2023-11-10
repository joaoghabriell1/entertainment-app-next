import MediaCard from "../media-card";
import ListHeading from "./heading";

type Props = {
  data: Movie[] | TVshow[];
  heading: string;
};

const List = ({ data, heading }: Props) => {
  function isMovie(media: Movie | TVshow): media is Movie {
    return (media as Movie).title !== undefined;
  }

  return (
    <>
      <section className="mx-4">
        <ListHeading content={heading} />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 ">
          {data.map((media, index) => {
            return isMovie(media) ? (
              <MediaCard
                id={media.id}
                poster_path={media.poster_path}
                backdrop_path={media.backdrop_path}
                release_date={media.release_date}
                overview={media.overview}
                title={media.title}
                key={index}
                isMovie={true}
              />
            ) : (
              <MediaCard
                id={media.id}
                poster_path={media.poster_path}
                backdrop_path={media.backdrop_path}
                release_date={media.first_air_date}
                overview={media.overview}
                title={media.name}
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

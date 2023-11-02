import MediaCard from "../media-card";

const mock = [1, 2, 3];

const List = () => {
  return (
    <ul>
      {mock.map((item) => {
        return <MediaCard />;
      })}
    </ul>
  );
};

export default List;

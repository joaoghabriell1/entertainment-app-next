const MediaInfo = (props: Partial<Movie>) => {
  const year = new Date(props.release_date!).getFullYear();

  return (
    <ul className="flex gap-2 text-sm text-slate-400 mt-2">
      <li>2017</li>
      <span>&#x2022;</span>
      <li>Movie</li>
    </ul>
  );
};

export default MediaInfo;

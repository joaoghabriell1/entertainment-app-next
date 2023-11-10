interface Movie {
  adult: boolean;
  tagline?: string;
  id: number;
  backdrop_path: string;
  title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  genred_ids: { id: number; name: string }[];
  popularity: int;
  status: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  runtime: number;
}

type TVshow = {
  adult: boolean;
  backdrop_path: string;
  created_by: TVshowCreator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  next_episode_to_air: null;
  networks: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: Array<{
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

type TVshowCreator = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

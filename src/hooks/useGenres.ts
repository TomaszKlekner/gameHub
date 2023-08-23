import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  games_count: number;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

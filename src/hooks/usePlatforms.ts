import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfomrs = () => useData<Platform>('/platforms/lists/parents');

export default usePlatfomrs;

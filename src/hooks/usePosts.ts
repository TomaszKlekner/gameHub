import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/postsx')
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

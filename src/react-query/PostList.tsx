import { usePosts } from '../hooks/usePosts';

export const PostList = () => {
  const { data: postList, isLoading, isError, error } = usePosts();

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <ul>
      {postList?.map((post) => (
        <li key={post.id}>
          {post.userId}# {post.id} - {post.title}
        </li>
      ))}
    </ul>
  );
};

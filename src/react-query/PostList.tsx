import { useState } from 'react';
import { usePosts } from '../hooks/usePosts';

export const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: postList, isLoading, isError, error } = usePosts(userId);

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
        className='form-select mb-3'
      >
        <option>Select a user</option>
        <option value='1'>User 1</option>
        <option value='2'>User 2</option>
        <option value='3'>User 3</option>
      </select>

      <ul className='list-group'>
        {postList?.map((post) => (
          <li className='list-group-item' key={post.id}>
            User {post.userId} : Post {post.id} - {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

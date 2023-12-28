import React from 'react';
import { usePosts } from '../hooks/usePosts';

export const PostList = () => {
  const pageSize = 10;
  const {
    data: postList,
    isLoading,
    isError,
    isFetchingNextPage,
    error,
    fetchNextPage,
  } = usePosts({
    pageSize,
  });

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <ul className='list-group'>
        {postList.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li className='list-group-item' key={post.id}>
                User {post.userId} : Post {post.id} - {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className='btn btn-primary mt-4'
      >
        {isFetchingNextPage ? 'Loading' : 'Load More'}
      </button>
    </>
  );
};

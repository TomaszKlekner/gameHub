import { useState } from 'react';
import { usePosts } from '../hooks/usePosts';

export const PostList = () => {
  const pageSize = 10;
  const [page, setpage] = useState(1);
  const {
    data: postList,
    isLoading,
    isError,
    error,
  } = usePosts({
    page,
    pageSize,
  });

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <ul className='list-group'>
        {postList?.map((post) => (
          <li className='list-group-item' key={post.id}>
            User {post.userId} : Post {post.id} - {post.title}
          </li>
        ))}
      </ul>

      <nav className='mt-4' aria-label='Page Pagination'>
        <ul className='pagination pagination-md'>
          <li className='page-item'>
            <button
              onClick={() => setpage(page - 1)}
              className={page === 1 ? 'page-link disabled' : 'page-link'}
              aria-label='Previous'
            >
              <span aria-hidden='true'>&laquo;</span>
            </button>
          </li>

          <li className='page-item'>
            <a className='page-link'>{page}</a>
          </li>

          <li className='page-item'>
            <button
              onClick={() => setpage(page + 1)}
              className={page === pageSize ? 'page-link disabled' : 'page-link'}
              aria-label='Next'
            >
              <span aria-hidden='true'>&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

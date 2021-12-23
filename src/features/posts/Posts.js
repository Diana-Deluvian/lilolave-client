import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import { selectFilteredPosts, selectIsLoading } from './postsSlice';

const Posts = () => {
  const posts = useSelector(selectFilteredPosts);
  const isLoading = useSelector(selectIsLoading);
  console.log(posts);

  return (
    <div className='flex flex-col items-center max-width-80ch w-full mx-4 my-8 border grow'>
      {isLoading ? (
        <h1>loading, yo</h1>
      ) : (
        posts.map((post) => <Post post={post} />)
      )}
    </div>
  );
};

export default Posts;

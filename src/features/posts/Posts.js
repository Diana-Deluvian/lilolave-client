import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import { selectFilteredPosts, deletePost, selectIsLoading } from './postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = (_id) => {
    dispatch(deletePost(_id));
  };

  return (
    <div className='flex flex-col items-center max-width-80ch w-full mx-4 my-8 border grow'>
      {isLoading ? (
        <h1>loading, yo</h1>
      ) : (
        posts.map((post) => <h1>A post, yo</h1>)
      )}
    </div>
  );
};

export default Posts;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPosts } from '../features/posts/postsSlice';

const SinglePost = () => {
  const { _id } = useParams();
  const post = useSelector(selectPosts).find((post) => post._id === _id);

  if (post) {
    return (
      <h1>
        Sorry, we were unable to find this silly lil post, please try again!
      </h1>
    );
  }
  return (
    <div className='flex flex-col grow w-full max-width-80ch'>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <p>{post?.personalNotes}</p>
      <p>{post?.otherInfo}</p>
      <p>Published on: {post?.date}</p>
    </div>
  );
};

export default SinglePost;

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPosts,
  deletePost,
  selectIsLoading,
  selectIsReqSuccess,
  resetIsReqSuccess,
} from '../features/posts/postsSlice';
import { selectIsAuth } from '../features/auth/authSlice';

const SinglePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isReqSuccess = useSelector(selectIsReqSuccess);
  const isAuth = useSelector(selectIsAuth);
  const { _id } = useParams();
  const post = useSelector(selectPosts).find((post) => post._id === _id);
  console.log(post.content);

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  useEffect(() => {
    if (isReqSuccess) navigate('/');
    return () => {
      dispatch(resetIsReqSuccess());
    };
  }, [isReqSuccess, dispatch, navigate]);

  if (!post) {
    return (
      <div className='flex flex-col grow max-width-80ch mx-4'>
        <p className='text-lg mt-8'>
          Loading post, please wait. If this operation takes too long, it either
          doesn't exist, or we are experiencing server difficulties.
        </p>
        <Link
          className='bg-black p-4 text-white rounded mt-4 w-max text-center'
          to='/'
        >
          Back to the main website
        </Link>
      </div>
    );
  }
  return (
    <div className='flex flex-col grow w-full max-width-80ch px-4'>
      <h1 className='mt-8 mb-2 text-2xl md:text-3xl text-center'>
        {post?.title}
      </h1>
      <p className='my-2 whitespace-pre-line'>{post?.content}</p>
      {isAuth ? (
        <p className='my-2 whitespace-pre-line'>{post?.personalNotes}</p>
      ) : null}
      {post?.otherInfo ? (
        <p className='text-gray-700'>Additional / Other info: </p>
      ) : null}
      <p className='my-2 whitespace-pre-line'>{post?.otherInfo}</p>
      <p>Published on: {post?.date}</p>

      {isAuth ? (
        <div className='flex justify-center relative mt-4 pb-16 '>
          <button
            className='py-2 w-32 border-2 border-black rounded mr-4'
            onClick={() => navigate(`/editPost/${post._id}`)}
          >
            Edit
          </button>
          <button
            className='py-2 w-32 bg-black text-white rounded'
            onClick={handleDelete}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>

          {isReqSuccess === false ? (
            <p className='text-primary mx-4 bottom-0 text-center absolute'>
              "There was a problem with the server, please try again!"
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default SinglePost;

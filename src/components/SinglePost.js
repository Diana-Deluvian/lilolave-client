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
  const posts = useSelector(selectPosts);
  const post = posts.find((post) => post._id === _id);

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  useEffect(() => {
    if (isReqSuccess) navigate('/');
    return () => {
      dispatch(resetIsReqSuccess());
    };
  }, [isReqSuccess, dispatch, navigate]);

  if (posts.length === 0) {
    return (
      <div className='flex flex-col items-center max-width-65ch w-full mx-4 my-8 grow'>
        {
          //adding it as an svg to not suffer from compression as its size change
        }
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='heartbeat'
          className='w-32 heartbeatAnimation'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path
            fill='black'
            d='M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z'
          ></path>
        </svg>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='flex flex-col grow max-width-65ch mx-4'>
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
    <div className='flex flex-col grow w-full max-width-65ch px-4'>
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
      <p className='mb-4'>Published on: {post?.date}</p>

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

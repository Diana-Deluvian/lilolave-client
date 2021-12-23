import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createPost,
  selectIsLoading,
  selectIsReqSuccess,
  resetIsReqSuccess,
} from './postsSlice';
import PostForm from '../../components/PostForm';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isReqSuccess = useSelector(selectIsReqSuccess);

  const handleSubmit = async (post) => {
    const res = await fetch('https://pifc.herokuapp.com/');
    const data = await res.json();
    post.date = data.fullDate;
    dispatch(createPost(post));
  };
  useEffect(() => {
    if (isReqSuccess) navigate('/');
    return () => {
      dispatch(resetIsReqSuccess());
    };
  }, [isReqSuccess, dispatch, navigate]);

  return (
    <React.Fragment>
      <PostForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isReqSuccess={isReqSuccess}
      />
    </React.Fragment>
  );
};

export default AddPost;

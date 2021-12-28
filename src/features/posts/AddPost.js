import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createPost,
  selectPosts,
  selectIsLoading,
  selectIsReqSuccess,
  resetIsReqSuccess,
  updatePost,
} from './postsSlice';
import PostForm from '../../components/PostForm';

const AddPost = ({ edit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isReqSuccess = useSelector(selectIsReqSuccess);
  const { _id } = useParams();
  const post =
    useSelector(selectPosts).find((post) => post._id === _id) || null;

  const handleSubmit = async (post) => {
    edit ? dispatch(updatePost(post)) : dispatch(createPost(post));
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
        post={post}
      />
    </React.Fragment>
  );
};

export default AddPost;

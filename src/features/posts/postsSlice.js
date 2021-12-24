import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectSearchCategory } from '../search/searchSlice';

const url = 'https://lilolave.herokuapp.com';
//const url = 'http://localhost:8080';

export const loadPosts = createAsyncThunk(
  'posts/getPosts',
  async (state, action) => {
    const { token, isAuth } = action.getState().auth;

    const data = isAuth
      ? await fetch(`${url}/allPosts`, {
          method: 'GET',
          credentials: 'include',
          headers: { Authorization: token },
        })
      : await fetch(`${url}/posts`);
    const json = await data.json();
    return json;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (state, action) => {
    const { token } = action.getState().auth;
    const data = await fetch(`${url}/post`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(state),
    });
    const json = await data.json();
    return json;
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (state, action) => {
    console.log(state);
    const { token } = action.getState().auth;
    const data = await fetch(`${url}/post/${state._id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(state),
    });
    const json = await data.json();
    return json;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (state, action) => {
    const { token } = action.getState().auth;
    const data = await fetch(`${url}/post/${state}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { Authorization: token },
    });
    const json = await data.json();
    return state;
  }
);

const sliceOptions = {
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
    isReqSuccess: null,
  },
  reducers: {
    resetIsReqSuccess: (state) => {
      state.isReqSuccess = null;
    },
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.sort(function (a, b) {
        return b.pinned;
      });
      //puts the pinned posts first
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [createPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload);
      state.isLoading = false;
      state.isReqSuccess = true;
    },
    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [updatePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
      state.posts.unshift(action.payload);
      state.isLoading = false;
      state.isReqSuccess = true;
    },
    [updatePost.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.isLoading = false;
      state.isReqSuccess = true;
    },
    [deletePost.rejected]: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.isLoading = false;
      state.isReqSuccess = false;
    },
  },
};

export const postsSlice = createSlice(sliceOptions);

export const selectPosts = (state) => state.posts.posts;

export const selectIsLoading = (state) => state.posts.isLoading;

export const selectIsReqSuccess = (state) => state.posts.isReqSuccess;

export const selectFilteredPosts = (state) => {
  const posts = selectPosts(state);
  const category = selectSearchCategory(state);
  if (category === 'All') return posts;
  else {
    return posts.filter((post) => post.category === category);
  }
};

export const { resetIsReqSuccess } = postsSlice.actions;

export default postsSlice.reducer;

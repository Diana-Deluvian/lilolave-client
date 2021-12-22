import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import searchReducer from './features/search/searchSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    Posts: postsReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from './features/auth/Login';
import Posts from './features/posts/Posts.js';
import { loadPosts } from './features/posts/postsSlice';
import AddPost from './features/posts/AddPost';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SinglePost from './components/SinglePost';

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='min-height-100vh flex flex-col items-center'>
        <Header />

        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Posts />} />
          <Route exact path='/addpost' element={<AddPost />} />
          <Route
            exact
            path='/editPost/:_id'
            element={<AddPost edit={true} />}
          />
          <Route exact path='/post/:_id' element={<SinglePost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

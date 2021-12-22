import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AppRouter = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Header />
      <div className=''>
        <Routes>
          <Route exact path='/' element={<Posts />} />
          <Route exact path='/post/:_id' element={<SinglePost />} />
          <Route exact path='/addPost' element={<AddPost />} />
          <Route exact path='/editPost/:_id' element={<EditPost />} />

          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

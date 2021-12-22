import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './features/auth/Login';

const AppRouter = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Header />
      <div className=''>
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

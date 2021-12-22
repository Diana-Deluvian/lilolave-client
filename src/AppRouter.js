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
      <div className='min-height-100vh flex flex-col'>
        <Header />
        <div className='grow'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

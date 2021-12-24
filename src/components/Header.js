import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchCategory } from '../features/search/searchSlice';
import { selectIsAuth } from '../features/auth/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const isAuth = useSelector(selectIsAuth);

  const handleCategoryClick = (e) => {
    dispatch(setSearchCategory(e.target.innerText));
    navigate('/');
  };
  return (
    <div className='w-full flex justify-between bg-black text-white p-4 items-center '>
      <span
        className='ml-4 cursor-pointer relative '
        onClick={() => setShowCategories(!showCategories)}
      >
        Categories
        {showCategories && (
          <div className='absolute flex flex-col bg-black text-white -left-8 top-8 w-32 items-center cursor-default p-2'>
            <h2 className='p-2'>Literature</h2>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Essays
            </p>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Poems
            </p>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Reviews
            </p>
            <h2 className='p-2'>Media</h2>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Game Analysis
            </p>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Series Study
            </p>
            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer'
            >
              Film Critique
            </p>

            <p
              onClick={handleCategoryClick}
              className='text-sm text-gray-200 cursor-pointer mt-4'
            >
              All
            </p>
          </div>
        )}
      </span>
      <Link className='flex items-center ' to='/'>
        <div></div>
        <img className='h-6 mr-2 inline-block ' src={icon} />
        <span className='text-xl'>Lilolave</span>
      </Link>
      {isAuth ? (
        <Link className='mr-4' to='/addPost'>
          New Post
        </Link>
      ) : (
        <Link className='mr-4' to='/about'>
          About
        </Link>
      )}
    </div>
  );
}

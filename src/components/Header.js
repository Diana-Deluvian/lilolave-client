import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.svg';

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <div className='w-full flex justify-between bg-black text-white p-4 items-center '>
      <span
        className='ml-4 cursor-pointer relative '
        onClick={() => setShowCategories(!showCategories)}
      >
        Categories
        {showCategories && (
          <div className='absolute flex flex-col bg-black text-white -left-8 top-8 w-32 items-center p-2'>
            <h2 className='p-2'>Literature</h2>
            <p className='text-sm text-gray-200'>Essays</p>
            <p className='text-sm text-gray-200'>Poems</p>
            <p className='text-sm text-gray-200'>Reviews</p>
            <h2 className='p-2'>Media</h2>
            <p className='text-sm text-gray-200'>Game Analysis</p>
            <p className='text-sm text-gray-200'>Series Study</p>
            <p className='text-sm text-gray-200'>Film Critique</p>
          </div>
        )}
      </span>
      <Link className='flex items-center ' to='/'>
        <div></div>
        <img className='h-6 mr-2 inline-block ' src={icon} />
        <span className='text-xl'>Lilolave</span>
      </Link>
      <Link className='mr-4' to='/about'>
        About
      </Link>
    </div>
  );
}

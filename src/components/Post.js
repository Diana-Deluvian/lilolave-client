import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className='flex flex-col w-full border-l-2 border-t-2 border-gray-200  bg-gray-100 postShadow justify-center px-2 max-width-80ch ml-4 mr-8 lg:px-4 lg:mx-0 my-6'>
      <Link to={`/post/${post._id}`}>
        <span className='text-xl'> {post?.title || 'No title provided'} </span>

        <p className='text-gray-600 my-2 italic'>{post?.date}</p>
        <div className='my-3'>
          {post?.keywords?.split(', ').map((keyword) => (
            <span
              className='bg-black text-white rounded py-2 px-2 mr-2'
              key={keyword}
            >
              {keyword}
            </span>
          ))}
        </div>
        <p className='mb-4'>
          {`${post?.content?.split(/\r?\n/)[0].substring(0, 100)} `}{' '}
          <span className='text-gray-600'>(...read more)</span>
        </p>
        {
          //the above returns at most the first 100 chars of the first paragraph of a post
        }
      </Link>
    </div>
  );
}

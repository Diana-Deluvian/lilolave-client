import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className='flex flex-col md:w-full  bg-gray-100 postShadow justify-center max-width-80ch ml-4 mr-8 md:px-4 md:mx-0 my-6'>
      <Link className='text-xl ' to={`/post/${post._id}`}>
        {post?.title || 'No title provided'}
      </Link>
      <p className='text-gray-600 my-1 italic'>{post?.date}</p>
      <div className='my-2'>
        {post?.keywords?.split(', ').map((keyword) => (
          <span
            className='bg-black text-white rounded py-2 px-2 mr-2'
            key={keyword}
          >
            {keyword}
          </span>
        ))}
      </div>
      <p className='mb-4'>{`${post?.content?.substring(0, 100)}...`}</p>
    </div>
  );
}

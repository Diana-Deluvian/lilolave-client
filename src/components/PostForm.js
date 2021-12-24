import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/authSlice';
import { categories } from '../features/search/searchSlice';
import { selectIsLoading } from '../features/posts/postsSlice';

import Textarea from './Textarea';

export default function PostForm(props) {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);

  const [post, setPost] = useState(() => {
    return {
      title: props.post ? props.post.title : '',
      category: props.post ? props.post.category : 'Essays',
      personalNotes: props.post ? props.post.personalNotes : '',
      content: props.post ? props.post.content : '',
      keywords: props.post ? props.post.keywords : '',
      otherInfo: props.post ? props.post.otherInfo : '',
      hidden: props.post ? props.post.hidden : true,
      pinned: props.post ? props.post.pinned : false,
    };
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setRows = (text) => {
    return Math.floor(text.length / 80) + 6 + (text.match(/\n/g) || '').length;
    //counts the number of new lines to add
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(post);
  };

  if (!isAuth) {
    return (
      <div className='flex flex-col grow'>
        <p className='text-lg mt-8'>
          You need to be authenticated to visit this page!
        </p>
        <Link
          className='bg-black p-4 text-white rounded mt-4 w-max text-center'
          to='/'
        >
          Back to the main website
        </Link>
      </div>
    );
  }
  return (
    <div className='flex flex-col grow items-center mx-4 md:mx-0'>
      <div className='mt-8 text-xl'>
        <label className='mr-4 text-gray-700'>Title:</label>
        <input
          name='title'
          value={post.title}
          onChange={handleInputChange}
          className={`border-b-2 border-black px-3 mb-3 
          text-center outline-none w-60 md:w-96`}
        />
      </div>

      <div className='block'>
        <span className='text-gray-700'>Category:</span>
        <div className='mt-2 flex flex-wrap justify-center border-2 border-black p-2'>
          {categories.map((category) => (
            <div key={category}>
              <label className='inline-flex items-center mx-2'>
                <input
                  type='radio'
                  className='form-radio text-black border border-black focus:border-none'
                  name='category'
                  value={category}
                  onChange={handleInputChange}
                  checked={category === post.category ? true : false}
                />
                <span className='ml-2 '>{category}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <Textarea
        handleInputChange={handleInputChange}
        label='Personal Notes'
        name='personalNotes'
        value={post.personalNotes}
        rows={setRows(post.personalNotes)}
      />
      <Textarea
        handleInputChange={handleInputChange}
        label='Content'
        name='content'
        value={post.content}
        rows={setRows(post.content)}
      />
      <Textarea
        handleInputChange={handleInputChange}
        label='Additional or other information'
        name='otherInfo'
        value={post.otherInfo}
        rows={setRows(post.otherInfo) - 4}
      />

      <div className='block w-full flex flex-col mt-4'>
        <span className='text-gray-700'>Keywords:</span>
        <input
          className='border-2 border-black max-width-80ch mt-2 outline-none'
          type='text'
          onChange={handleInputChange}
          name='keywords'
          value={post.keywords}
        />
      </div>

      <div className='block w-full flex mt-4 items-center'>
        <span className='text-gray-700'>Hidden:</span>
        <input
          className='form-checkbox border-2 border-black max-width-80ch ml-2 outline-none text-black focus:border-black'
          type='checkbox'
          onChange={(e) => setPost({ ...post, hidden: !post.hidden })}
          name='hidden'
          value={post.hidden}
          checked={post.hidden}
        />
      </div>

      <div className='block w-full flex mt-4 items-center'>
        <span className='text-gray-700'>Pinned:</span>
        <input
          className='form-checkbox border-2 border-black max-width-80ch ml-2 outline-none text-black focus:border-black'
          type='checkbox'
          onChange={(e) => setPost({ ...post, pinned: !post.pinned })}
          name='pinned'
          value={post.pinned}
          checked={post.pinned}
        />
      </div>

      <input
        className='bg-black text-white py-2 w-32 mx-4 my-4 rounded cursor-pointer'
        type='submit'
        value={isLoading ? 'Submitting...' : 'Submit'}
        onClick={handleSubmit}
      />

      {props.isReqSuccess === false ? (
        <p className='text-primary mx-2 bottom-0 absolute'>
          "There was a problem with the server, please try again!"
        </p>
      ) : null}
    </div>
  );
}

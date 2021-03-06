import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../../components/Post';
import { selectFilteredPosts, selectIsLoading } from './postsSlice';
import {
  setSearchKeyword,
  clearSearchKeyword,
  selectSearchKeyword,
} from '../search/searchSlice';

const Posts = () => {
  const posts = useSelector(selectFilteredPosts);
  const isLoading = useSelector(selectIsLoading);
  const searchKeyword = useSelector(selectSearchKeyword);
  const dispatch = useDispatch();

  const onKeywordClick = (e) => {
    e.preventDefault();
    dispatch(setSearchKeyword(e.target.innerText));
  };

  return (
    <div className='flex flex-col px-6 items-center max-width-65ch w-full mx-2 my-8 grow'>
      {isLoading ? (
        //adding it as an svg to not suffer from compression as its size change
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='heartbeat'
          className='w-32 heartbeatAnimation'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path
            fill='black'
            d='M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z'
          ></path>
        </svg>
      ) : (
        <React.Fragment>
          {searchKeyword ? (
            <div>
              <span className='px-2 py-1'>{`Keyword: "${searchKeyword}"`}</span>
              <button
                className='bg-black text-white px-2 py-1 rounded ml-2'
                onClick={() => dispatch(clearSearchKeyword())}
              >
                Clear
              </button>
            </div>
          ) : null}
          {posts.map((post) => (
            <Post post={post} key={post._id} onKeywordClick={onKeywordClick} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Posts;

import React, { useState, useEffect, useRef } from 'react';

export default function Textarea(props) {
  const textareaRef = useRef();
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      //calculates the height of the content inside the textarea
      textareaRef.current.style.height = scrollHeight + 150 + 'px';
      //makes sure we always have 150px (5 line heights) at the bottom of our text area
    }
  }, [props]);

  return (
    <div className='w-full flex flex-col mt-4'>
      <span className='text-gray-700'>{props.label}:</span>
      <textarea
        className='border-2 border-black max-width-65ch mt-2 outline-none resize-none'
        ref={textareaRef}
        onChange={props.handleInputChange}
        name={props.name}
        value={props.value}
      ></textarea>
    </div>
  );
}

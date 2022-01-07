import React, { useEffect, useRef } from 'react';

export default function Textarea(props) {
  const textareaRef = useRef();
  useEffect(() => {
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
    //calculates the height of the content inside the textarea
  }, [props.value]);

  return (
    <div className='w-full flex flex-col mt-4'>
      <span className='text-gray-700'>{props.label}:</span>
      <textarea
        className='border-2 h-32 border-black mt-2 outline-none resize-none px-2 pb-32 overflow-hidden'
        ref={textareaRef}
        onChange={props.handleInputChange}
        name={props.name}
        value={props.value}
      ></textarea>
    </div>
  );
}

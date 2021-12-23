import React from 'react';

export default function Textarea(props) {
  return (
    <div className='block w-full flex flex-col mt-4'>
      <span className='text-gray-700'>{props.label}:</span>
      <textarea
        className='border-2 border-black max-width-80ch mt-2 outline-none resize-none'
        rows={props.rows}
        onChange={props.handleInputChange}
        name={props.name}
        value={props.value}
      ></textarea>
    </div>
  );
}

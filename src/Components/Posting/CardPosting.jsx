import React from 'react';

export default function CardPosting({ title, content }) {
  return (
    <div className='w-full h-full p-6 bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow'>
      <div className='flex flex-col gap-y-3'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='line-clamp-3'>{content}</p>
      </div>
    </div>
  );
}

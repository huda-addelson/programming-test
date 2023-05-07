import React from 'react';

export default function CardAbout({ text, title, year, lists }) {
  return (
    <div className='flex flex-col w-full gap-y-1'>
      <h3 className='text-lg font-bold'>{text}</h3>
      <p className='text-sm'>{title}</p>
      {year && (
        <span className='px-2 py-1 bg-zinc-100  w-fit rounded-md text-sm'>
          {year}
        </span>
      )}
      {lists && (
        <ul className='text-xs flex flex-col gap-1'>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

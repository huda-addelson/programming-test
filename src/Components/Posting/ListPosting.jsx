import React from 'react';

export default function ListPosting({ data, handlerChangeCheck }) {
  return (
    <div className='w-full h-full border-2 border-[#152a3b] p-3 rounded-md'>
      <div className='flex gap-x-5 h-full'>
        <div className='bg-[#152a3b] w-1/3 rounded-md h-20'></div>
        <div className='flex flex-col gap-y-2 w-full  justify-between'>
          <div className='text-xl font-bold'>{data.title}</div>
          <div className='line-clamp-3 w-11/12'>{data.content}</div>
          <div className='flex gap-x-2 self-end '>
            <input
              type='checkbox'
              checked={data.isPosting}
              value={data.id}
              onChange={handlerChangeCheck}
              className='cursor-pointer'
            />
            <label htmlFor={data.id}>Posting</label>
          </div>
        </div>
      </div>
    </div>
  );
}

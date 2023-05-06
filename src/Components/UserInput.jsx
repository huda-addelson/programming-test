import React from 'react';

export default function UserInput({
  title,
  handlerChange,
  name,
  type = 'text',
  className,
  value,
}) {
  return (
    <div className={`w-full relative group ${className}`}>
      <input
        type={type}
        required
        value={value}
        name={name}
        onChange={handlerChange}
        className='w-full h-full px-4 py-3 text-base peer bg-transparent outline-none border-2 border-black focus:border-[#009688] rounded-md inset-0'
      />
      <label className='transform transition-all duration-200 absolute top-0 left-2 h-full flex items-center pl-2 text-base group-focus-within:text-lg group-focus-within:-top-1 peer-valid:-top-1 peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0'>
        {title}
      </label>
    </div>
  );
}

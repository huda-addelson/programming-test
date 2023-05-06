import React from 'react';

export default function Button({
  text,
  className,
  type = 'button',
  icon,
  handlerClick,
}) {
  return (
    <button
      type={type}
      className={`flex items-center gap-x-2 px-5 py-2 cursor-pointer bg-[#182a3c] w-fit text-white rounded-md transition-all duration-200 hover:bg-opacity-70  ${className}`}
      onClick={handlerClick}>
      {icon}
      {text}
    </button>
  );
}

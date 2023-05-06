import React from 'react';

export default function Title({ text, className }) {
  return (
    <div className={`text-[#2fc7a3] text-3xl font-medium ${className}`}>
      <h1>{text}</h1>
    </div>
  );
}

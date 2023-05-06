import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <div className='bg-[#cfd9e2]'>
      <Navbar />
      <div className='px-2'>{children}</div>
    </div>
  );
}

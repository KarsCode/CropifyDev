'use client'
import Links from './Links'
import { ModeToggle } from './ModeToggle';
// import React, { use, useState } from 'react'
const Navbar = () => {
  return (
    <div className='flex h-24 items-center justify-between border-b-2 border-ring'>
      <div className='pt-4'>
        <a href="/">
          <img src={'./Screenshot_2023-12-24_142750-removebg-preview.png'} alt='Cropify' width={300} height={40} />
        </a>
      </div>

      <div className='flex gap-20'>
        <Links />
        <ModeToggle/>
        </div>

      

      {/* Other content */}
    </div>
    
  );
}

export default Navbar;

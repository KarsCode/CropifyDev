'use client'
import Links from './Links'
import { ModeToggle } from './ModeToggle';
// import React, { use, useState } from 'react'
const Navbar = () => {
  return (
    <div className='flex h-24 items-center justify-around shadow-md border-b border-ring bg-background'>
      <div>
        <a href="/">
          <img src={'./final_logo.png'} alt='Cropify' width={300} height={40} />
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

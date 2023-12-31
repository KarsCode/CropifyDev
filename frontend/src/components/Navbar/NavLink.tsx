'use client'
// Import React
import React from 'react';

// Define a TypeScript interface for the 'item' prop
interface NavLinkProps {
  item: {
    path: string;
    title: string;
    // Add any other properties you expect in 'item'
  };
}

// Define the NavLink component
const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  // Get the current pathname using window.location.pathname
  const pathName = window.location.pathname;

  return (
    <a
      href={item.path}
      className={`inline-block px-4 py-2 rounded-full border bg-background border-primary ${pathName === item.path ? 'bg-crophover' : ''} hover:bg-crophover transition duration-300 ease-in-out`}

    >
      {item.title}
    </a>
  );
};

// Export the NavLink component
export default NavLink;

"use client";

import { useState } from "react";
import NavLink from './NavLink'

import { RiMenuAddLine } from "react-icons/ri";

const links = [
  {
    title: "CropDoctor",
    path: "/CropDoctor",
  },
  {
    title: "SoilCheck",
    path: "/SoilCheck",
  },
  {
    title: "Blog",
    path: "/Blog",
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
  },
  {
    title: "Contact",
    path: "/Contact",
  },
  {
    title: "Profile",
    path: "/Profile",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='hidden lg:flex justify-between gap-10 text-xl'>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>

      <button
        className="lg:hidden text-2xl"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        <RiMenuAddLine style={{ fontSize: "1.5em" }} />
      </button>
      {open && (
        <div className="lg:hidden z-1 absolute top-16 right-0 w-4/12 h-[calc(100vh-100px)] bg-secondary flex flex-col items-center justify-center gap-10 border-l-2">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className="text-white hover:text-c6f57a"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

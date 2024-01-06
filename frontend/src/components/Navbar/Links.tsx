"use client";

import { useEffect, useState } from "react";
import NavLink from './NavLink'
import { RiMenuAddLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { VITE_API_URL } from "../../setupEnv";





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
    title: "Contact",
    path: "/Contact",
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
  },
  {
    title: "Login",
    path: "/login",
  }
];




const Links = () => {
  const [open, setOpen] = useState(false);
  const {user,setUser} = useContext(UserContext);
  const navigate=useNavigate();

// logout func begins
  const [redirect,setRedirect]=useState('');
  const handleLogout = async () => {
    try {
      await axios.post(`${VITE_API_URL}/logout`, {}, { withCredentials: true });
      setRedirect('/');
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    if (redirect !== '') {
      navigate(redirect);
    }
  }, [redirect, navigate]);
// logout func ends

  return (
    <div>
      <div className='hidden lg:flex justify-between gap-10 text-xl'>
        {links.map((link) => (
          // Only render the Dashboard link if the user exists
          (link.title === "Dashboard" && !user || link.title === "Login" && user) ? null : (
            <NavLink item={link} key={link.title} />
          )
        ))}

        {user !== undefined && user !== null && (
          <a
            onClick={handleLogout}
            className={`inline-block px-4 py-2 rounded-full border bg-background shadow-md hover:bg-crophover transition duration-200 ease-in-out cursor-pointer`}
            style={{ borderRadius: '20px' }}
          >
            Logout
          </a>
        )}

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

import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "motion/react";


const Footer = () => {

      	const links = <>
	<li><NavLink to='/' className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold"
            : "text-gray-500"
        }
>Home</NavLink></li>
	<li><NavLink to='/allbooks' className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold"
            : "text-gray-500"
        }
>All Books</NavLink></li>

	<li><NavLink to='/addbook' className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold"
            : "text-gray-500"
        }
>Add Book</NavLink></li>

	<li><NavLink to={`/borrowedBooks`} className={({ isActive }) =>
          isActive
            ? "text-green-600 font-bold"
            : "text-gray-500"
        }
>Borrowed Books </NavLink></li>

</>
    return (
<footer className="footer footer-horizontal gap-y-0 footer-center bg-slate-200 p-10 space-y-2">
  <aside className='space-y-1'>
  <motion.img 
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className='w-18' src={logo} alt="" />
    <p className="font-bold">
      BOOKNEST.
      </p>
      <p className='text-gray-700 py-4'>
BookNest is your go-to online library for exploring diverse book categories and authors. <br />
Happy reading and keep exploring!
    </p>
  </aside>
    <nav>
    <div className="grid grid-flow-col gap-4 ">
      <Link className='hover:text-green-600' to={"https://www.facebook.com/ki.korbi.id.diye"}>
      <CiFacebook size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.instagram.com/atik_h35/"}>
<FaInstagram size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.google.com/"}>
<TiSocialGooglePlus size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.linkedin.com/"}>
<TiSocialLinkedinCircular size={30}/>
      </Link>
      <Link className='hover:text-green-600' to={"https://www.youtube.com/"}>
<AiOutlineYoutube size={30}/>
      </Link>
    </div>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
    </div>
  </nav>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
    );
};

export default Footer;
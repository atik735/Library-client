import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import Swal from 'sweetalert2';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from '../../contexts/AuthContext';


const Navbar = () => {

      const {user,signOutUser} = useContext(AuthContext)
  // console.log(user);
  
    const handleSignOut =() =>{
      signOutUser()
      .then(() =>{
        console.log("signout succesfull");
              Swal.fire({
          title: "Sign Out Successfull!",
          icon: "success",
          draggable: true,
            timer: 1500
        });

      })
      .catch(error =>{
        console.log(error);
      })
    }
  
    // console.log(user)
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

        <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <Link to='/' className='flex items-center'>
    <img className='w-10 max-md:w-8 max-sm:w-8' src={logo} alt="" />
    <h3 className='font-bold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-green-600 to-lime-300 max-md:text-base'>BookNest</h3> 

</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">

  {user ? (
  <>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="avatar cursor-pointer">
        <div data-tooltip-id="my-tooltip-2" className="w-10 h-10 rounded-full overflow-hidden">
          <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow z-50"
      >
        <li>
          <h4>{user.displayName}</h4>
        </li>
        <li>
          <h4>{user.email}</h4>
        </li>
      </ul>
    </div>
          <ReactTooltip
        id="my-tooltip-2"
        place="left"
        variant="info"
        content={user.displayName}
      />
  </>
) : (
  <div className="space-x-3">
    <Link to="/signIn" className="btn text-white bg-green-600 hover:bg-green-700">
      SignIn
    </Link>
    <Link to="/register" className="btn text-white bg-green-600 hover:bg-green-700">
      Register
    </Link>
  </div>
)}
    {user && <div>
<button onClick={handleSignOut} className="btn btn-sm w-full text-white bg-green-600 hover:bg-green-700">
            Sign Out
          </button></div>}
</div>
</div>
    );
};

export default Navbar;
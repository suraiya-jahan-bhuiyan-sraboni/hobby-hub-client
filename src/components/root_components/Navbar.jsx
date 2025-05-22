import React, { use, useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AuthContext } from '../../context/AuthContextProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext)
  const location=useLocation()

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center flex-col">
      Loading...
      <progress className="progress w-56"></progress>
    </div>;
  }

  const handleLogout = function () {
    logout().then(() => {
      // Sign-out successful.
      // console.log("logged out")
      toast.success("Logged Out Sucessful");


    }).catch((error) => {
      //
      // console.log("An error happened.", error)
      toast.error(error);

    });

  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-groups">All Groups</NavLink></li>

            {
              user ? <>
                <li><NavLink to="/create-group">Create Group</NavLink></li>
                <li><NavLink to="/my-groups">My Groups</NavLink></li>

                <button onClick={handleLogout} className='btn bg-blue-800 text-white font-semibold m-4 sm:hidden '>Log out</button>
              </> : <>
                  <Link to="/register" className="btn text-blue-800  font-semibold m-2 text-center custom-btn">Register</Link>
                  <Link to="/login" className="btn text-blue-800  font-semibold m-2 text-center custom-btn">Login</Link>
              </>
            }
          </ul>
        </div>
        <Link className="text-xl text-blue-800 font-bold">HobbyHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/all-groups">All Groups</NavLink></li>

          {
            user ? <><li><NavLink to="/create-group">Create Group</NavLink></li>
              <li><NavLink to="/my-groups">My Groups</NavLink></li> </> : null
          }

        </ul>
      </div>
      <div className="navbar-end">
        {
          (user) ?
            <>
              <div className=" mx-4 relative group">
                <img className='w-10 h-10 object-cover rounded-full '
                  alt="user "
                  src={user.photoURL} />
                <p className='absolute px-2 bg-gray-200 border border-gray-400
              opacity-0 group-hover:opacity-100
              text-gray-500 font-semibold rounded text-center right-12 bottom-1 '>{user.displayName}</p>
              </div>
              <button onClick={handleLogout} className='btn bg-blue-800 text-white font-semibold hidden sm:block'>Log out</button>
            </>
            : <>
              {location.pathname === '/login' ? (
                <Link to="/register" className="btn bg-blue-800 text-white font-semibold">Register</Link>
              ) : location.pathname === '/register' ? (
                <Link to="/login" className="btn bg-blue-800 text-white font-semibold">Login</Link>
              ) : (
                <>
                      <Link to="/login" className="btn bg-blue-800 text-white font-semibold mr-2 custom-auth-btn">Login</Link>
                      <Link to="/register" className="btn bg-blue-800 text-white font-semibold custom-auth-btn">Register</Link>
                </>
              )}
            </>
        }


      </div>
    </div>
  )
}

export default Navbar
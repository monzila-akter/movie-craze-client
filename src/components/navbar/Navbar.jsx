import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link, NavLink} from 'react-router-dom';
import "./navbar.css"
import { AuthContext } from '../../provider/AuthProvider';
import ThemeToggle from '../ThemeToggle';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-5 shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        
        {/* Website Name/Logo on the left */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">
            <h2 className="">Movie<span className='text-red-500'>Craze</span></h2>
          </Link>
        </div>

        {/* Menu Bar for large device */}
        <div className="hidden lg:flex space-x-6 flex-grow justify-center">
          <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
          <NavLink to="/allMovies" className="text-white hover:text-gray-300">All Movies</NavLink>
          <NavLink to="/addMovie" className="text-white hover:text-gray-300">Add Movie</NavLink>
          <NavLink to="/myFavorites" className="text-white hover:text-gray-300">My Favorites</NavLink>
          <NavLink to="/trending" className="text-white hover:text-gray-300">Trending</NavLink>
        </div>
        <ThemeToggle></ThemeToggle>

        {/* login/register button for large device */}
        <div className="hidden lg:flex items-center space-x-5">
        {user? (
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-red-500 object-cover cursor-pointer"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                  <div
                    className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out z-10"
                  >
                    <span className="text-lg">{user?.displayName}</span>
                  </div>
                </div>
              ) : (
                <span className="w-12 h-12 rounded-full bg-transparent flex justify-center items-center text-white text-xl border-2 border-red-500 cursor-pointer">
                  <FaUser />
                </span>
              )}
          {
            user ? <button onClick={logOut} className="text-white border-2 border-red-500 btn bg-transparent text-lg hover:text-red-500 hover:bg-transparent" >Log Out</button> : <>
              <Link to="/login" className="text-white border-2 border-red-500 btn bg-transparent text-lg hover:text-red-500 hover:bg-transparent">Login</Link>
              <Link to="/register" className="text-white border-2 border-red-500 btn bg-transparent text-lg hover:text-red-500 hover:bg-transparent">Register</Link>
            </>
          }
          
         
        </div>

        {/* Mobile Menu Button for medium and smaller devices */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-4 space-y-4">
          <NavLink  to="/" className="block text-white hover:text-gray-300">Home</NavLink>
          <NavLink to="/allMovies" className="block text-white hover:text-gray-300">All Movies</NavLink>
          <NavLink to="/addMovie" className="block text-white hover:text-gray-300">Add Movie</NavLink>
          <NavLink to="/myFavorites" className="block text-white hover:text-gray-300">My Favorites</NavLink>
          <NavLink to="/trending" className="block text-white hover:text-gray-300">Trending</NavLink>
          
          {user ? (
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-red-500 object-cover cursor-pointer"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                  <div
                    className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out z-10"
                  >
                    <span className="text-lg">{user?.displayName}</span>
                  </div>
                </div>
              ) : (
                <span className="w-12 h-12 rounded-full bg-transparent flex justify-center items-center text-white text-xl border-2 border-red-500 cursor-pointer">
                  <FaUser />
                </span>
              )}
          {/* Login/Register buttons in mobile menu */}
          
          {
            user? <button onClick={logOut} className="block text-red-500 hover:text-gray-300 text-lg text-center">Log Out</button> : <>
              <Link to="/login" className="block text-red-500 hover:text-gray-300 text-lg text-center">Login</Link>
              <Link to="/register" className="block text-red-500 hover:text-gray-300 w-full text-center text-lg">Register</Link>
            </>
          }
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;

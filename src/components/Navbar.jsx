import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-5 shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        
        {/* Website Name/Logo on the left */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            <h2 className="">Movie<span className='text-red-500'>Craze</span></h2>
          </Link>
        </div>

        {/* Menu Bar for large device */}
        <div className="hidden lg:flex space-x-6 flex-grow justify-center">
          <NavLink href="/" className="text-white hover:text-gray-300">Home</NavLink>
          <NavLink href="/all-movies" className="text-white hover:text-gray-300">All Movies</NavLink>
          <NavLink href="/add-movie" className="text-white hover:text-gray-300">Add Movie</NavLink>
          <NavLink href="/my-favorites" className="text-white hover:text-gray-300">My Favorites</NavLink>
          <NavLink href="/trending" className="text-white hover:text-gray-300">Trending</NavLink>
        </div>

        {/* login/register button for large device */}
        <div className="hidden lg:flex items-center space-x-5">
          <p className='text-white text-lg border-2 p-3 rounded-full border-red-500'><FaUser></FaUser></p>
          <Link href="/login" className="text-white border-2 border-red-500 btn bg-transparent text-lg hover:text-red-500 hover:bg-transparent">Login</Link>
          <Link href="/register" className="text-white border-2 border-red-500 btn bg-transparent text-lg hover:text-red-500 hover:bg-transparent">Register</Link>
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
          <NavLink href="/" className="block text-white hover:text-gray-300">Home</NavLink>
          <NavLink href="/allMovies" className="block text-white hover:text-gray-300">All Movies</NavLink>
          <NavLink href="/addMovie" className="block text-white hover:text-gray-300">Add Movie</NavLink>
          <NavLink href="/myFavorites" className="block text-white hover:text-gray-300">My Favorites</NavLink>
          <NavLink href="/trending" className="block text-white hover:text-gray-300">Trending</NavLink>
          <div className='flex justify-center'>
          <p className='text-white text-lg w-10 h-10 flex justify-center items-center  border-2 p-3 rounded-full border-red-500 block'><FaUser></FaUser></p>
          </div>
          {/* Login/Register buttons in mobile menu */}
          
          <Link href="/login" className="block text-red-500 hover:text-gray-300 text-lg text-center">Login</Link>
          <Link href="/register" className="block text-red-500 hover:text-gray-300 w-full text-center text-lg">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

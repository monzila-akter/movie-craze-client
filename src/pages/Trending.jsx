import React from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Trending = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      mirror: true,  
    });

    
    AOS.refresh();
  }, []); 

  return (
    <section className="w-11/12 mx-auto pt-28 pb-12 px-6 md:px-10 lg:px-14">
      <h2
      data-aos="fade-up-right" 
       data-aos-delay="100"
       className="text-3xl text-red-500 font-bold text-center mb-8">Trending Now</h2>

      <div className="space-y-12">
        {/* Trending Categories Section */}
        <div className="bg-base-100 p-6 rounded-lg shadow-md">
          <h3
          data-aos="fade-left" 
       data-aos-delay="100"
          className="text-2xl  text-red-500 font-semibold text-center mb-7">Trending Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Action</h4></Link>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Comedy</h4></Link>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Drama</h4></Link>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Horror</h4></Link>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Thriller</h4></Link>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
              <Link to="/allMovies"><h4 className="text-lg font-semibold text-center">Sci-Fi</h4></Link>
            </div>
          </div>
        </div>

         {/* Trending Film Studios Section */}
         <div className="bg-base-100 p-6 rounded-lg shadow-md">
          <h3
          data-aos="flip-right" 
       data-aos-delay="100"
           className="text-2xl font-semibold text-red-500 text-center mb-7">Popular Film Studios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
            data-aos="fade-right" 
       data-aos-delay="100"
             className="p-5 rounded-lg shadow  transition hover:scale-105 bg-white">
              <img className='rounded-lg w-full h-[180px] object-cover' src="https://i.ibb.co.com/KN0dM6G/Warner-Bros-Logo-Design-History-Evolution-0-1024x1024.webp" alt="" />
              <h2 className='text-xl font-semibold text-red-500 mt-4 text-center'>Warner Bros.</h2>
            </div>
            <div
            data-aos="fade-up" 
       data-aos-delay="100"
             className="p-5 rounded-lg shadow hover:scale-105 transition bg-white">
            <img className='rounded-lg w-full h-[180px] object-cover' src="https://i.ibb.co.com/2Pn3jVd/img-4543png.webp" alt="" />
            <h2 className='text-xl font-semibold text-red-500 mt-4 text-center'>Universal Pictures</h2>
            </div>
            <div
            data-aos="fade-down" 
       data-aos-delay="100"
             className="p-5 rounded-lg shadow hover:scale-105 transition bg-white">
            <img className='rounded-lg w-full h-[180px] object-cover' src="https://i.ibb.co.com/R6RB1M6/images.jpg" alt="" />
            <h2 className='text-xl font-semibold text-red-500 mt-4 text-center'>20th Century Studios</h2>
            </div>
            <div
            data-aos="fade-up" 
       data-aos-delay="100"
             className="p-5  rounded-lg shadow hover:scale-105 transition bg-white">
            <img className='rounded-lg w-full h-[180px] object-cover' src="https://i.ibb.co.com/3p9VRXv/images-1.jpg" alt="" />
            <h2 className='text-xl font-semibold text-red-500 mt-4 text-center'>Paramount Pictures</h2>
            </div>
          </div>
        </div>

          {/* Upcoming Releases Section */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md">
          <h3 
          data-aos="fade-left" 
       data-aos-delay="100"
          className="text-2xl font-semibold text-red-500 text-center mb-7">Upcoming Movie Releases</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
             {/* upcoming movie card one */}
             <div
             data-aos="fade-right" 
       data-aos-delay="100"
              className="transition hover:scale-105 card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src="https://i.ibb.co.com/ZxypWJb/images-9.jpg" alt="" className="w-full h-full md:h-64 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className=" text-xl font-semibold mb-2 text-center">Avatar-3</h2>
        
      </div>
    </div>
    {/* upcoming movie card two*/}
    <div
    data-aos="fade-up" 
       data-aos-delay="100"
     className="transition hover:scale-105 card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src="https://i.ibb.co.com/xsCbJkQ/unnamed-3.jpg" alt="" className="w-full h-full md:h-64 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className=" text-xl font-semibold mb-2 text-center">Karate Kid</h2>
        
      </div>
    </div>
    {/* upcoming movie card three */}
    <div
    data-aos="fade-down" 
       data-aos-delay="100"
     className="transition hover:scale-105 card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src="https://i.ibb.co.com/09ck0k6/flight-risk-2024-official-poster-1.jpg" alt="" className="w-full h-full md:h-64 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className=" text-xl font-semibold mb-2 text-center">Flight Risk</h2>
        
      </div>
    </div>
    {/* upcoming movie card four */}
    <div
    data-aos="fade-left" 
       data-aos-delay="100"
     className="transition hover:scale-105 card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src="https://i.ibb.co.com/DzXb7by/images-10.jpg" alt="" className="w-full h-full md:h-64 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className=" text-xl font-semibold mb-2 text-center">Scream</h2>
        
      </div>
    </div>
          </div>
        </div>

        {/* Trending Topics Section */}
        <div className="bg-base-100 dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md">
          <h3 
          data-aos="flip-right" 
       data-aos-delay="100"
          className="text-2xl text-red-500 font-semibold text-center mb-7">Trending Topics</h3>
          <ul className="space-y-4">
            <li data-aos="fade-left" 
       data-aos-delay="100">
              <Link to="/" className="text-xl text-blue-400 hover:underline">
                "Best Action Movies of 2024"
              </Link>
            </li>
            <li data-aos="fade-right" 
       data-aos-delay="100">
              <Link to="/" className="text-xl text-blue-400 hover:underline">
                "Top 10 Romantic Comedies to Watch"
              </Link>
            </li>
            <li data-aos="fade-left" 
       data-aos-delay="100">
              <Link to="/" className="text-xl text-blue-400 hover:underline">
                "Must-See Horror Films This Year"
              </Link>
            </li>
            <li data-aos="fade-right" 
       data-aos-delay="100">
              <Link to="/" className="text-xl text-blue-400 hover:underline">
                "Sci-Fi Movies That Will Blow Your Mind"
              </Link>
            </li>
          </ul>
        </div>

       

      
      </div>
    </section>
  );
};

export default Trending;

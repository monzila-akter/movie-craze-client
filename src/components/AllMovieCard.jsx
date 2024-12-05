// AllMovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AllMovieCard = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating } = movie;

  return (
    <div className="card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src={poster} alt={title} className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-2"><span  className='text-white font-semibold'>Genre:</span>  {genre}</p>
        <div className="flex justify-between text-sm text-gray-300">
          <span>{duration} minutes</span>
          <span>{releaseYear}</span>
        </div>
        <div className="mt-2 text-red-500 font-semibold"><span className='text-white font-semibold'>Rating:</span> {rating} / 5</div>
        <div className="card-actions justify-center mt-4">
          <Link to={`/details/${_id}`} className="btn bg-transparent border-2 border-red-500 text-red-500 text-lg font-semibold hover:bg-transparent hover:text-white ">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMovieCard;

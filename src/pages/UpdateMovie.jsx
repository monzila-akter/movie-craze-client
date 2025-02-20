import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster from react-hot-toast
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useContext, useState } from "react";
import Select from "react-dropdown-select";

// Movie genres and years
const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Thriller", "History", "Adventure", "Sci-Fi"];
const years = [2024, 2023, 2022, 2021, 2020, 2019];


const UpdateMovie = () => {

const movie = useLoaderData();
const { _id, poster, title, genre, duration, releaseYear, rating, summary } = movie;

const [ratings, setRatings] = useState(rating || 0); // Rating state
  const {user} = useContext(AuthContext);
  const [selectedGenres, setSelectedGenres] = useState(genre || []);

  const handleGenreChange = (values) => {
    setSelectedGenres(values.map((genre) => genre.value)); // Extract values from selected items
  };
  // Handle rating change (from react-simple-star-rating)
  const handleRating = (rate) => {
    setRatings(rate);
  };

  // Handle form submission with validations
  const handleUpdateMovie = (e) => {
    e.preventDefault();
    // Validation checks
    if (!isValidForm(e.target)) {
      return;
    }

    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = selectedGenres;
    const duration =parseInt(form.duration.value, 10);
    const releaseYear = parseInt(form.releaseYear.value, 10);
    const summary = form.summary.value;
    
    const updatedMovie = {poster, title, genre, duration, releaseYear, summary, ratings, userEmail: user?.email} 
   
    // send data to server

    fetch(`https://movie-craze-server.vercel.app/movies/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedMovie)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        if(data.modifiedCount > 0){
           // Show success message
           Swal.fire({
            title: 'Success',
            text: 'Movie Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })

    

    
  };

  // Form validation function
  const isValidForm = (form) => {
    const poster = form.poster.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;

    // Validate poster URL
    if (!poster || !isValidUrl(poster)) {
      toast.error("Please provide a valid image URL for the movie poster.");
      return false;
    }

    // Validate title
    if (title.length < 2) {
      toast.error("Movie title must be at least 2 characters long.");
      return false;
    }

    // Validate genre
    if (selectedGenres.length === 0) {
      toast.error("Please select a movie genre.");
      return false;
    }

    // Validate duration
    if (!duration || duration < 60) {
      toast.error("Movie duration must be greater than 60 minutes.");
      return false;
    }

    // Validate release year
    if (!releaseYear) {
      toast.error("Please select a release year.");
      return false;
    }

    // Validate rating
    if (ratings === 0) {
      toast.error("Please select a rating for the movie.");
      return false;
    }

    // Validate summary
    if (summary.length < 10) {
      toast.error("Movie summary must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  // Helper function to check if the URL is valid
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

    return (
        <div className='pt-36 pb-16 px-5 md:px-0'>
        <div className="max-w-4xl mx-auto py-8 px-6 md:px-10 border-2 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl text-red-500 font-bold text-center mb-6">Update Movie</h1>
          <form onSubmit={handleUpdateMovie} className="space-y-6">
            
            <div className="flex flex-col">
              <label htmlFor="poster" className="text-sm font-medium text-gray-700">Movie Poster URL</label>
              <input
                type="text"
                name="poster"
                className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter poster image URL"
                defaultValue={poster}
                
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Movie Title</label>
              <input
                type="text"
                name="title"
                className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter movie title"
                defaultValue={title}
               
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="genre" className="text-sm font-medium text-gray-700">Genre</label>
              <Select
             multi
             options={genres.map((g) => ({ label: g, value: g.toLowerCase() }))}
             onChange={handleGenreChange}
             className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
             placeholder="Select genres"
             values={selectedGenres.map((g) => ({ label: g.charAt(0).toUpperCase() + g.slice(1), value: g }))}
              style={{
                border: "1px solid #D1D5DB", 
                borderRadius: "0.375rem", 
                padding: "0.75rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="duration" className="text-sm font-medium text-gray-700">Duration (in minutes)</label>
              <input
                type="number"
                name="duration"
                className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter duration in minutes"
                defaultValue={duration}
                
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="releaseYear" className="text-sm font-medium text-gray-700">Release Year</label>
              <select
                id="releaseYear"
                name="releaseYear"
                className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                defaultValue={releaseYear}
                
              >
                <option >Select year</option>
                {years.map((year, idx) => (
                  <option key={idx} defaultValue={releaseYear} value={year}>{year}</option>
                ))}
              </select>
            </div>
  
            <div className="flex flex-row items-center" >
              <label className="text-sm font-medium text-gray-700 me-3">Rating</label>
              <div className="flex items-center space-x-2">
                <Rating
                  onClick={handleRating}
                  initialValue={ratings}
                  SVGstyle={{'display': 'inline'}}
                />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label  className="text-sm font-medium text-gray-700">Summary</label>
              <textarea
                id="summary"
                name="summary"
                className="bg-white mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter a short summary of the movie"
                defaultValue={summary}
               
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-lg font-semibold rounded-md text-white"
            >
              Update Movie
            </button>
          </form>
  
          {/* Toast notifications container */}
          <Toaster position="top-center" />
        </div>
      </div>
    );
};

export default UpdateMovie;
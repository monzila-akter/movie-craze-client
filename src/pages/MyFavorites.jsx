import React, { useEffect, useState, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";



const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      mirror: true,  
    });

    
    AOS.refresh();
  }, []); 

  // Fetch favorite movies
  const fetchFavorites = async () => {
    try {
      const res = await fetch(`http://localhost:5000/favorites?userEmail=${user.email}`);
      const data = await res.json();
     
      
      setFavorites(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
      setLoading(false);
    }
  };

  // Handle delete favorite movie
  const handleDeleteFavorite = async (movieId) => {
  

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:5000/favorites/${movieId}/${user?.email}`, {
            method: "DELETE",
          });
  
          const data = await res.json();
        //   console.log("Delete response:", data); 
  
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The movie has been removed from your favorites.",
              icon: "success",
            });
            setFavorites((prevFavorites) =>
              prevFavorites.filter((movie) => movie._id !== movieId)
            );
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the movie. Please try again.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting favorite:", error); 
          Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred. Please try again later.",
            icon: "error",
          });
        }
      }
    });
  };

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user]);
  
  
  if (loading) return <div>Loading your favorite movies...</div>;

  return (
    <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 py-10">
      <h2 
      data-aos="fade-down-right" 
       data-aos-delay="100"
      className="text-3xl text-center font-bold text-red-500 mb-8">Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500">You have no favorite movies yet!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <div
            data-aos="flip-right" 
       data-aos-delay="100"
             key={movie._id} className="transition hover:scale-105 border rounded-lg shadow-lg p-4 bg-white">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-gray-600"><strong>Genre:</strong> {movie.genre.join(", ")}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {movie.duration} mins</p>
                <p className="text-gray-600"><strong>Release Year:</strong> {movie.releaseYear}</p>
                <p className="text-gray-600"><strong>Rating:</strong> {movie.rating}</p>
                <button
                  onClick={() => handleDeleteFavorite(movie._id)}
                  className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md flex items-center space-x-2"
                >
                  <FaTrashAlt />
                  <span>Delete Favorite</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;

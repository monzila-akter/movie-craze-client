import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart, FaPenToSquare } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const movieDetails = useLoaderData();
    const { _id, poster, title, genre, duration, releaseYear, rating, summary } = movieDetails;
    const [movie, setMovie] = useState(movieDetails)

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You wan't to delete this movie!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           

            fetch(`http://localhost:5000/movies/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success"
              })
                 setMovie(null) 

                 navigate("/allMovies")
                }    
            })
            
            }
          });
    }
// add movie to user's favorite
const handleAddToFavorites = () => {
    if (!user) {
      Swal.fire({
        title: "You need to login first!",
        text: "Please log in to add to favorites.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    const favoriteMovie = { movieId: _id, userEmail: user.email };

    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
    .then((res) => {
        if (!res.ok) {
          // Handle the case where the movie is already in favorites
          return res.json().then(data => {
            if (data.message) {
              // Show SweetAlert with the custom error message from the backend
              Swal.fire({
                title: "Error!",
                text: data.message,  // Show the "Movie has already been added to your favorites" message
                icon: "error",
                confirmButtonText: "Okay",
              });
            }
          });
        }
        return res.json();
      })
    .then((data) => {
      if (data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'Movie added to your favorites successfully.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Error!",
        text: "Movie already in favorites.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    });
  };


    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 py-20">
            {/* Movie Details */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-14">
                {/* Movie Poster */}
                <img
                    src={poster}
                    alt={title}
                    className="w-full md:w-2/5 h-full md:h-full lg:h-[500px] object-cover rounded-lg shadow-lg"
                />
                {/* Movie Info */}
                <div className=" md:w-3/5">
                    <h2 className="text-3xl font-bold text-red-500 mb-5">{title}</h2>
                    <div className="text-lg space-y-2 text-gray-600">
                        <p><strong>Genre:</strong> {genre}</p>
                        <p><strong>Duration:</strong> {duration} mins</p>
                        <p><strong>Release Year:</strong> {releaseYear}</p>
                        <p><strong>Rating:</strong> {rating}</p>
                    </div>
                    <p className="text-gray-700 my-5">{summary}</p>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 my-7">
                        {/* Placeholder Buttons */}
                 <button
                 onClick={()=>handleDelete(_id)}
                  className="btn bg-red-500 text-white text-xl">
                            <FaTrashAlt></FaTrashAlt>
                </button>
                        <button onClick={handleAddToFavorites} className="btn  bg-pink-500 text-xl text-white">
                            <FaHeart></FaHeart>
                        </button>
                        <Link to={`/updateMovie/${_id}`}><button  
                            className="btn  bg-gray-700 text-xl text-white"
                        >
                            <FaPenToSquare></FaPenToSquare>
                        </button></Link>
                    </div>
                </div>
            </div>
            {/* See All Movies Button */}
            <div className="mt-12 flex justify-center">
                        <Link to="/allMovies"><button 
                            className="btn bg-red-500 text-lg font-semibold text-white"
                        >
                            See All Movies
                        </button></Link>
                    </div>
        </div>
    );
};

export default Details;

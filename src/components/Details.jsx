import { FaTrashAlt } from "react-icons/fa";
import { FaHeart, FaPenToSquare } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const navigate = useNavigate();
    const movieDetails = useLoaderData();
    const { _id, poster, title, genre, duration, releaseYear, rating, summary } = movieDetails;

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
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }


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
                        <button className="btn  bg-pink-500 text-xl text-white">
                            <FaHeart></FaHeart>
                        </button>
                        <button  
                            className="btn  bg-gray-700 text-xl text-white"
                        >
                            <FaPenToSquare></FaPenToSquare>
                        </button>
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

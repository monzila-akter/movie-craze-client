import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllMovieCard from "../components/AllMovieCard";

const AllMovies = () => {

    const movies = useLoaderData();

    // State for the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter movies based on search query
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mb-16">
            <h2 className="text-4xl font-bold text-red-500 text-center mt-16 mb-10">
                All Movies
            </h2>

            {/* Search input field */}
            <div className="mb-10 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by movie title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-3 w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
            </div>

            {/* Movies grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    // If there are no movies matching the search, display a message
                    filteredMovies.length === 0 ? (
                        <p className="text-center text-lg text-gray-500">
                            No movies found with that title.
                        </p>
                    ) : (
                        filteredMovies.map((movie) => (
                            <AllMovieCard key={movie._id} movie={movie} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default AllMovies;

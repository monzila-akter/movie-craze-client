import { useLoaderData } from "react-router-dom";
import AllMovieCard from "../components/AllMovieCard";


const AllMovies = () => {

    const movies = useLoaderData();

    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mb-16">
            <h2 className="text-3xl font-semibold text-gray-700 text-center mt-16 mb-10">All Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  movies.map(movie => <AllMovieCard key={movie._id} movie={movie}></AllMovieCard>)  
                }
            </div>
        </div>
    );
};

export default AllMovies;
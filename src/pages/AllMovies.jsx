import { useLoaderData } from "react-router-dom";


const AllMovies = () => {

    const movies = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-700 text-center mt-16">All Movies</h2>
            <div>
                {
                  movies.map(movie => )  
                }
            </div>
        </div>
    );
};

export default AllMovies;
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";

const Home = () => {

   const featuredMovies = useLoaderData();

    return (
        <div>
            <Banner></Banner>
           <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mb-16">
            <h2 className="text-4xl font-bold mb-10 text-red-500 text-center">Featured Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    featuredMovies.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>)
                }
            </div>
           </div>

           <AboutUs></AboutUs>
           <Blog></Blog>
        </div>
    );
};

export default Home;
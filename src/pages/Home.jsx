import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

   const featuredMovies = useLoaderData();

   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      mirror: true,  
    });

    
    AOS.refresh();
  }, []); 

    return (
        <div>
            <Banner></Banner>
           <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mb-20">
            <h2
            data-aos="fade-right" 
        data-aos-delay="100"
             className="text-4xl font-bold mb-10 text-red-500 text-center">Featured Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    featuredMovies?.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>)
                }
            </div>
           <div data-aos="fade-left" 
        data-aos-delay="100">
           <Link
           
           to="/allMovies"> <button className="btn block mx-auto bg-red-500 text-white text-lg font-semibold mt-10">See all movies</button></Link>
           </div>
           </div>

           <AboutUs></AboutUs>
           <Blog></Blog>
        </div>
    );
};

export default Home;
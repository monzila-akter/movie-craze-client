import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";



const Mainlayout = () => {

    const location = useLocation();

    const dynamicTitles = {
        "/": "Home | Movie Craze",
        "/allMovies": "All Movies | Movie Craze",
        "/addMovie": "Add Movie | Movie Craze",
        "/myFavorites": "My Favorites | Movie Craze",
        "/login": "Log In | Movie Craze",
        "/register": "Register | Movie Craze",
        "/details": "Movie Details | Movie Craze",
        "/updateMovie": "Update Movie | Movie Craze",
        "/trending": "Trending | Movie Craze"
    }

    useEffect(() => {
        const currentPath = location.pathname;
        const title = dynamicTitles[currentPath] || "Movie Craze";
        document.title = title;
    }, [location])

    return (
        <div>
         <Toaster></Toaster>
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
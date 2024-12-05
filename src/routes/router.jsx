import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Trending from "../pages/Trending";
import Details from "../components/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("http://localhost:5000/featuredMovies")
        },
        {
          path: "/allMovies",
          element: <AllMovies></AllMovies>,
          loader: ()=> fetch("http://localhost:5000/movies")
        },
        {
          path: "/addMovie",
          element: <AddMovie></AddMovie>
        },
        {
          path: "/myFavorites",
          element: <MyFavorites></MyFavorites>
        },
        {
          path: "/trending",
          element: <Trending></Trending>
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
        }
      ]
    },
  ]);
  

export default router;
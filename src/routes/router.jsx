import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Trending from "../pages/Trending";
import Details from "../components/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateMovie from "../pages/UpdateMovie";
import PrivateRoute from "./PrivateRoute";


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
          element: <PrivateRoute>
            <AddMovie></AddMovie>
            </PrivateRoute>
        },
        {
          path: "/myFavorites",
          element: <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        },
        {
          path: "/trending",
          element: <Trending></Trending>
        },
        {
          path: "/details/:id",
          element: <PrivateRoute>
            <Details></Details>
            </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/updateMovie/:id",
          element: <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
        }
      ]
    },
  ]);
  

export default router;
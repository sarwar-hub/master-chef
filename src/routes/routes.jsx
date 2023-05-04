import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetailsLayout from "../layouts/ChefDetailsLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Err404 from "../pages/Err404/Err404";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'chef',
        element: <ChefDetailsLayout></ChefDetailsLayout>,
        children: [
            {
                path: '',
                element: <Navigate to='/'></Navigate>
            },
            {
                path: ':id',
                element: <PrivateRout><ChefDetails></ChefDetails></PrivateRout>,
                loader:({params})=>fetch(`https://master-chef-server-sarwar-hub.vercel.app/chef/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Err404></Err404>
    }
])

export default router;
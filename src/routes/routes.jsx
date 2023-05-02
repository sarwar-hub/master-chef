import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetailsLayout from "../layouts/ChefDetailsLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Err404 from "../pages/Err404/Err404";

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
                element: <ChefDetails></ChefDetails>,
                loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Err404></Err404>
    }
])

export default router;
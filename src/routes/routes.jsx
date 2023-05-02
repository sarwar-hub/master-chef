import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetailsLayout from "../layouts/ChefDetailsLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'chef',
        element: <ChefDetailsLayout></ChefDetailsLayout>,
        children: [
            {
                path: ':id',
                element: <ChefDetails></ChefDetails>,
                loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])

export default router;
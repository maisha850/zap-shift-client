import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Coverage from "../Componants/Coverage";
import ErrorPage from "../Componants/ErrorPage";

export const router = createBrowserRouter([
{
    path: '/',
Component: Root,
errorElement: <ErrorPage></ErrorPage> ,
children: [
    {
        index: true,
        Component: Home
    },
    {
        path:'/coverage',
        Component: Coverage,
        loader:()=>fetch('/warehouses.json')
    }
]
}
])
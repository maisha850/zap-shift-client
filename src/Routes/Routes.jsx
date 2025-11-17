import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Coverage from "../Componants/Coverage";
import ErrorPage from "../Componants/ErrorPage";
import AuthLayout from "../Auth/AuthLayout";
import LogIn from "../Auth/LogIn";
import Register from "../Auth/Register";
import Rider from "../Pages/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Pages/SendParcel";

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
    },
    {
        path: '/rider',
        element: <PrivateRoute>
            <Rider></Rider>
        </PrivateRoute>
    },
    {
        path: '/send-parcel',
        element: <PrivateRoute>
            <SendParcel></SendParcel>
        </PrivateRoute>,
          loader:()=>fetch('/warehouses.json')
    }
]
},
{
    path: '/',
    Component: AuthLayout,
    children: [
        {
            path: '/logIn',
            Component: LogIn
        },
        {
            path: '/register',
            Component: Register
        }
    ]
}
])
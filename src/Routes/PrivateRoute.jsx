import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading}=useAuth()
    const location = useLocation()
    if(loading){
        return <div>
            
<span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if(user){
        return children
    }
   return <Navigate to={'/logIn'} state={location.pathname}></Navigate>
};

export default PrivateRoute;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='w-[100vw] h-[100vh] flex justify-center items-center'><progress className="absolute text-white progress w-56"></progress></div>;
    }

    if(user) {
        return children;
    } else {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRout;
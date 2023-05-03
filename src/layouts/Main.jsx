/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            {navigation.state === 'loading' && <div className='w-[100vw] h-[100vh] flex justify-center items-center'><progress className="absolute progress w-56"></progress></div>}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
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
            <div className='absolute flex justify-center items-center'>{navigation.state === 'loading' && <span className='p-5 bg-base-300 rounded-lg'>Please wait...</span>}</div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
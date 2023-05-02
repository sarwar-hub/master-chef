/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefDetailsLayout = () => {
    

    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ChefDetailsLayout;
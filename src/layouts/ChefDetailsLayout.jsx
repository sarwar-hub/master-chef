/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const ChefDetailsLayout = () => {
    

    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ChefDetailsLayout;
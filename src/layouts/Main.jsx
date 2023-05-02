/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
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
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomeBanner from '../components/HomeBanner/HomeBanner';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className='absolute flex justify-center items-center'>{navigation.state === 'loading' && <span className='p-5 bg-base-300 rounded-lg'>Please wait...</span>}</div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
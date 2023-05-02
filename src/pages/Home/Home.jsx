/* eslint-disable no-unused-vars */
import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Chefs from '../../components/Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;
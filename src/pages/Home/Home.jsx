/* eslint-disable no-unused-vars */
import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Chefs from '../../components/Chefs/Chefs';
import Testimonial from '../../components/Testimonial/Testimonial';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <div className='mb-[100px]'>
                    <Chefs></Chefs>
                </div>
                <div className='mb-[100px]'>
                    <Testimonial></Testimonial>
                </div>
                <div className='mb-[100px]'>
                    <NewsLetter></NewsLetter>
                </div>
            </div>
        </div>
    );
};

export default Home;
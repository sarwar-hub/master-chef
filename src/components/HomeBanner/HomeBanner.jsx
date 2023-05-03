/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../assets/banner2.jpg';
import LazyLoad from 'react-lazyload';
const HomeBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">Choose Your Master..!</h1>
                    <p className="mb-5">We provide fresh, all natural meals delivered direct to your doorstep, allowing you to eat healthier while taking away the task of shopping, prepping and cooking.</p>
                    <button className="btn btn-outline">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../assets/banner2.jpg';


const DetailsBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default DetailsBanner;
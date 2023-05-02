/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../assets/banner2.jpg';

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">Choose Your Master..!</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
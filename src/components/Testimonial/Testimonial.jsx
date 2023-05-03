/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../assets/banner.jpg';
import banner2 from '../../assets/banner2.jpg';

const Testimonial = () => {
    return (
        <>
        <h1 className='text-5xl md:text-7xl'>Testimonial</h1>
        <hr className='my-7' />
        <div className="carousel w-full rounded-lg ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full" />
                <div className='absolute text-center mt-[5%] md:mt-[20%] px-16 bg-black/80'>
                    <h1 className='text-4xl'>John</h1>
                    <p>A belated post but just wanted to say that my friend and I had such a great time last Saturday learning how to make tamales!
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className='absolute text-center mt-[5%] md:mt-[20%] px-16 bg-black/80'>
                    <h1 className='text-4xl'>Mark</h1>
                    <p>Maggie recently catered a large event in Afton. Not only did the food look and taste exceptional but also the staff, the decor, and the overall organization was outstanding.
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;
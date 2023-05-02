/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Err404 = () => {
    return (
        <div className=''>
            <div className=' w-[100vw] h-[100vh] flex flex-col justify-center items-center text-left'>
                <div>
                    <h1 className='text-7xl'>404</h1>
                    <p>Page not found</p>
                    <p>Go <Link className='underline hover:text-white' to='/'>Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Err404;
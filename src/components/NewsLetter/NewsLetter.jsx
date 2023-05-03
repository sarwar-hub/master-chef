/* eslint-disable no-unused-vars */
import React from 'react';

const NewsLetter = () => {
    return (
        <>
        <h1 className='text-5xl md:text-7xl'>Our Newsletter</h1>
        <hr className='my-7' />
        <div className='border-[1px] flex justify-around items-center px-10 py-[100px] rounded-xl w-[100%] shadow-xl'>
            <div>
                <h1 className='text-5xl'>Subscribe Now..!</h1>
            </div>
            <div className="form-control">
                <div className="input-group">
                    <input type="email" placeholder="Your Email" className="input input-bordered" />
                    <button className="btn btn-square px-4">
                        SEND
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default NewsLetter;
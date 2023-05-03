/* eslint-disable no-unused-vars */
import React from 'react';
const ref = React.createRef();
import Pdf from "react-to-pdf";



const Blog = () => {
    return (
        <div className='mx-2 md:mx-[10%] my-[100px]'>
            {/* headding */}
            <div className='flex justify-between'>
                <h1 className='text-5xl md:text-7xl'>Blogs</h1>
                {/* pdf genarator */}
                <div>
                    <Pdf targetRef={ref} filename="div-blue.pdf"  x={.5} y={.5} scale={0.8}>
                        {({toPdf}) => (
                            <button className='btn btn-outline btn-sm' onClick={toPdf}>Download as pdf</button>
                        )}
                    </Pdf>
                </div>
            </div>

            {/* body */}
            <div ref={ref}>
                <hr className='my-7' />
                <div className='mb-5'>
                    <h3 className='text-3xl'># Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos et officia natus, illum suscipit libero inventore ratione quisquam, cupiditate dolores harum. Molestias fuga consectetur dolorem repudiandae nulla perspiciatis, blanditiis magnam?</h3>
                    <p className='text-3xl pl-5'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed. </p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-3xl'># Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed.</h3>
                    <p className='text-3xl pl-5'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed. </p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-3xl'># Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed.</h3>
                    <p className='text-3xl pl-5'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed. </p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-3xl'># Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed.</h3>
                    <p className='text-3xl pl-5'>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat quos in ratione cumque ipsam consequatur, natus eum suscipit nam voluptatem assumenda odit quam magnam. Nulla ipsum maxime rerum sed. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
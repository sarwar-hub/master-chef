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
                <div className='mb-12'>
                    <h3 className='text-3xl mb-4'># Differences between uncontrolled and controlled components.</h3>
                    <p className='text-xl pl-5'>- Controlled components are able to manage or regulate actively and uncontrolled components are not able to manage or regulate actively.</p>
                </div>
                <div className='mb-12'>
                    <h3 className='text-3xl mb-3'># How to validate React props using PropTypes?</h3>
                    <p className='text-xl pl-5'>- Firstly, we have to install the package and import PropTypes. Then have to define propType object and specify the data type with the comoponent. Finally, if the prop is not passed or incorrectly passed then PropTypes will throw an error.</p>
                </div>
                <div className='mb-12'>
                    <h3 className='text-3xl mb-3'># Difference between node js and express js.</h3>
                    <p className='text-xl pl-5'>- Node.js provides the runtime environment for executing JavaScript code on the server, while Express.js is a framework that runs on Node.js and provides additional functionality for building web applications.</p>
                </div>
                <div className='mb-12'>
                    <h3 className='text-3xl mb-3'># What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='text-xl pl-5'>- Custom hooks are custom functions that allows us to extract logic from components and making it easier to reuse code. I will create custom hook to reuse and organise code, manage states etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
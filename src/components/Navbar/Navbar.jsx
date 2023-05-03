/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import avatar from '../../assets/user.webp';
import { Link } from 'react-router-dom';
import IsActive from '../IsActive/IsActive';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);
    
    const handleLogOut = async() => {
        try {
            await logOut();
        } catch(error) {
            console.log(error.message);
        }
    }
    
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><IsActive to='/'>Home</IsActive></li>
                        <li><IsActive to='/about'>About</IsActive></li>
                        <li><IsActive to='/blog'>Blog</IsActive></li>
                    </ul>
                </div>
                <a className="normal-case text-xl"><span className='text-white px-3 py-2 bg-primary/60'> MASTER</span><span className='text-primary px-3 py-2 bg-black'>CHEF</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><IsActive to='/'>Home</IsActive></li>
                    <li><IsActive to='/about'>About</IsActive></li>
                    <li><IsActive to='/blog'>Blog</IsActive></li>
                </ul>
            </div>
            <div className="navbar-end">
                { !user 
                ? <Link to='/login'><button className='btn btn-outline btn-sm mr-3'>Login</button></Link>
                :
                <div className="dropdown group dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={user?user.photoURL:avatar} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-center hidden group-hover:block absolute right-0 top-10 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>{user?.displayName}</a></li>
                        <li><a>Profile</a></li>
                        <button onClick={handleLogOut} className='btn btn-sm w-full bg-red-800 text-white hover:text-red-700'>Logout</button>
                    </ul>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    

    // get location
    const location  = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    // error state
    const [error, setError] = useState('');

    // data from context
    const {logIn, googleLogin, githubLogin,loading} = useContext(AuthContext);

    if(loading){
        return <div className='w-[100vw] h-[100vh] flex justify-center items-center'><progress className="absolute text-white progress w-56"></progress></div>;
    }

    // login with email and password
    const handleLogin = async(event) => {
        event.preventDefault();
        setError('');

        const email = event.target.email.value; 
        const password = event.target.password.value;

        try {
            await logIn(email, password);
            event.target.reset();
            navigate(from, {replace:true});
        } catch(error) {
            setError(error.message);
        }

    }

    // login with google
    const handleGoogleLogin = async(event) => {
        setError('');

        try {
            await googleLogin();
            navigate(from, {replace:true});
        } catch(error) {
            setError(error.message);
        }

    }
    // login with github
    const handleGithubLogin = async(event) => {
        setError('');

        try {
            await githubLogin();
            navigate(from, {replace:true});
        } catch(error) {
            setError(error.message);
        }

    }
    
    return (
        <div className='mx-2 md:mx-[10%] my-[100px]'>
            <h1 className='text-5xl md:text-7xl'>Login</h1>
            <hr className='my-7' />


            {/* form */}
            <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {error &&
                            <div className='bg-red-500/20 text-red-500 p-3 rounded-md'>{error}</div>
                        }
                        <label className="label">
                            <Link to='/reset'><span className="label-text-alt link link-hover">Forgot password?</span></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    <label className="label">
                        <p className='label-text-alt'>If new, please <Link to='/register'><span className="text-white link link-hover">Register</span></Link></p>
                    </label>
                    <div className="divider">OR</div>                  
                </form>
                <div className='card-body pt-0 flex'>
                    <button onClick={handleGoogleLogin} className="btn btn-outline border-green-600 text-white-600 btn-sm hover:bg-transparent hover:text-green-600"><FaGoogle className='mr-5 text-green-600'></FaGoogle>Login with Google</button>
                    <button onClick={handleGithubLogin} className="btn btn-outline btn-sm "><FaGithub className='mr-5 '></FaGithub>Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    // get location
    const location  = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    // error state
    const [error, setError] = useState('');

    // data from context
    const {logIn} = useContext(AuthContext);

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
    
    return (
        <div className='mx-2 md:mx-[10%] my-[100px]'>
            <h1 className='text-5xl md:text-7xl'>Login</h1>
            <hr className='my-7' />


            {/* form */}
            <form onSubmit={handleLogin} className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
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
                </div>
            </form>
        </div>
    );
};

export default Login;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {


    // get location
    const location  = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    // states
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const [notice, setNotice] = useState('');

    const {createUser, updateNamePhoto, logOut, loading} = useContext(AuthContext);

    if(loading){
        return <div className='w-[100vw] h-[100vh] flex justify-center items-center'><progress className="absolute text-white progress w-56"></progress></div>;
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        setError('');
        setPassError('');

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        if (password.length < 6) {
            setPassError('Password should be at least 6 characters');
            return
        }
        try {
            await createUser(email, password);
            await updateNamePhoto(name, photo);
            event.target.reset();
            await logOut();
            navigate('/login');
        } catch(error) {
            setError(error.message);
        }
        
    }
    return (
        <div className='mx-2 md:mx-[10%] my-[100px]'>
            <h1 className='text-5xl md:text-7xl'>Register</h1>
            <hr className='my-7' />

            {/* form */}
            <form onSubmit={handleRegister} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    {error &&
                        <div className='bg-red-500/20 text-red-500 p-3 rounded-md'>{error}</div>
                    }
                    {notice &&
                        <div className='bg-blue-500/20 text-blue-500 p-3 rounded-md'>{notice}</div>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                    </div>
                    {passError &&
                        <div className='bg-red-500/20 text-red-500 p-3 rounded-md'>{passError}</div>
                    }
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                    <label className="label">
                        <p className='label-text-alt'>If already registered <Link to='/login'><span className="text-white link link-hover">Login</span></Link></p>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Register;
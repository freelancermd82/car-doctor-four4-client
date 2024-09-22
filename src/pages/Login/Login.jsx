import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero bg-base-200 h-[600px]">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img className='w-2/3' src={login} alt="" />
                </div>
                <div onSubmit={handleLogin} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center mt-5 font-bold">Login</h1>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-2xl" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='ms-8 mb-5'>New car doctor please/<Link className='text-orange-500' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
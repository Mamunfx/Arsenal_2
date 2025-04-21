import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Navbar from '../../../arsenal/src/components/Navbar';
import Footer from '../../../arsenal/src/components/Footer';
import { AuthContext } from '../Auth_Provider/AuthProvider';
import Loading from './../Components/Loading';



const Signin = () => {
  const {userLogin,handleGoogleSignIn,loading,setUser}=useContext(AuthContext);
  const [err , setErr]=useState({});
  const location =useLocation();
  const Navigate = useNavigate();
  const handleGoggle=()=>{
    handleGoogleSignIn()
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    
    userLogin(email,password)
    .then(result=>{
      const user = result.user;
      setUser(user)
      form.reset()
      Navigate(location?.state ? location.state : "/")
    })
    .catch(error=>{
      setErr( {...error , login:error.code})
    })
  }
    return (
      <div>
        <Navbar></Navbar>

        {
          loading ? 
          <Loading></Loading> 
          :
          <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name='email'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name='password'
                    className="input input-bordered"
                    required
                  />
                  <div>
                  {
                    err.login && <label className="label text-red-500 text-lg py-4">{err.login}</label>
                  }
                  </div>
                  <label className="label text-blue-500" >
                    <Link to='/Signup'>Don't have an account?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6" onClick={handleGoggle}>
                  <button className="btn btn-primary">Goggle</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        }

        <Footer></Footer>
      </div>
    );
};

export default Signin;
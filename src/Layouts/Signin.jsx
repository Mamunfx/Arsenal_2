import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../../arsenal/src/components/Navbar';
import Footer from '../../../arsenal/src/components/Footer';
import { AuthContext } from '../Auth_Provider/AuthProvider';

const Signin = () => {
  const {userLogin,handleGoogleSignIn}=useContext(AuthContext)

  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    userLogin(email,password)
    .then(result=>{
      const loggedUser=result.user
      console.log(loggedUser)
      alert('Login successful!')
      form.reset()
    })
    .catch(error=>{
      console.error(error)
      alert('Login failed')
    })
  }
    return (
      <div>
        <Navbar></Navbar>
        
        <div className="form-control flex justify-self-end ">
          <label className="label cursor-pointer flex justify-center gap-4 ">
            <span className="label-text ">Dark mode</span>
            <input type="checkbox" className="toggle" defaultChecked onClick={() => window.toggleTheme()}/>
          </label>
        </div>

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
                  <label className="label text-blue-500" >
                    <Link to='/Signup'>Don't have an account?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Signin;
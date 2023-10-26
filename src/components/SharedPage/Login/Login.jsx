

import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Route/Provider/AuthProvider';

const Login = () => {


    const {SignIn}= useContext(AuthContext)

    const handelLogin = e=>{
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(email,password)

        SignIn(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
      <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
      <h1 className="text-4xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <input className='btn bg-[#FF3811]' type="submit" value="login" />
        </div>
      </form>
      <p className='my-4 text-center'> Have an account? Sign Up <Link className='text-orange-600 font-bold' to='/signUp'>Sign Up</Link>
      </p>
    </div>
  </div>
</div>
    );
};

export default Login;
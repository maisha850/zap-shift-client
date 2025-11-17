import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router';
import GoogleLogIn from './GoogleLogIn';


const LogIn = () => {
    const{register , handleSubmit, formState: {errors}} = useForm()
    const{signInUser} = useAuth()
    const handleLogIn=(data)=>{
        console.log(data)
         signInUser(data.email , data.password)
        .then((res)=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return(
<div className=' space-y-3'>
  <h1 className="text-3xl text-center font-bold">Welcome back to ZapSHift</h1>
          <p className='text-xl text-center font-medium'>Please logIn now</p>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogIn)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register('email', {required: true})} placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
          <label className="label">Password</label>
          <input type="password" className="input" {...register('password', {required: true , minLength: 6})} placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>} 
           {errors.password?.type === 'minLength'&& <p className='text-red-500'>Password must contain 6 characters</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
        <p>New to zapShift? Please<Link className="text-blue-500" to={'/register'} > register</Link> </p>
        </form>
        <GoogleLogIn></GoogleLogIn>
      </div>
    </div>
    </div>
    )
    
};

export default LogIn;
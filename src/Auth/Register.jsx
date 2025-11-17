import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router';
import GoogleLogIn from './GoogleLogIn';
import axios from 'axios';

const Register = () => {
    const {register , handleSubmit, formState:{errors}}=useForm()
    const {createUser ,updateUser } = useAuth()
    const handleRegister=(data)=>{
        console.log(data)
        console.log('photo' , data.photo[0])
        const profileImg = data.photo[0]
        createUser(data.email , data.password)
        .then((res)=>{
            console.log(res.user)
            const formData = new FormData()
            formData.append('image' , profileImg)
            const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageHost}`
            axios.post(imageUrl , formData)
            .then(res=>{
                console.log('after image upload', res.data.data.url)
                const profile = {
                    displayName : data.name,
                    photoURL : res.data.data.url
                }
                updateUser(profile)
                .then(()=>{
                    console.log('profile updated')
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
        .catch(err=>{
            console.log(err.message)
        })

    }
    return (
        <div className=' space-y-3'>
  <h1 className="text-3xl text-center font-bold">Welcome back to ZapSHift</h1>
          <p className='text-xl text-center font-medium'>Please register now</p>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className='card-body'>
             <form onSubmit={handleSubmit(handleRegister)} >
                <fieldset className="fieldset ">
                      <label className="label">Name</label>
          <input type="text" className="input" {...register('name', {required:true})} placeholder="Name" />

          {errors.name?.type ==='required' && <p className='text-red-500'>Name is required</p>}
            <label className="label">Photo</label>
          <input type="file" className="file-input" {...register('photo', {required:true})} placeholder="Photo" />

          {errors.photo?.type ==='required' && <p className='text-red-500'>Photo is required</p>}
          <label className="label">Email</label>
          <input type="email" className="input" {...register('email', {required:true})} placeholder="Email" />

          {errors.email?.type ==='required' && <p className='text-red-500'>Email is required</p>}
          <label className="label">Password</label>
          <input type="password" className="input" {...register('password', {required:true , minLength:6 ,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
} )} placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p> }
          {errors.password?.type === 'minLength'&& <p className='text-red-500'>Password must contain 6 characters</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>"Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number."</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Register</button>
        </fieldset>
        <p>Already have account in zapShift? Please<Link className="text-blue-500" to={'/logIn'} > Log In</Link> </p>
             </form>
             <GoogleLogIn></GoogleLogIn>
        </div>
        </div>
    </div>
    );
};

export default Register;
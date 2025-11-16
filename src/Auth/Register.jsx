import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const {register , handleSubmit, formState:{errors}}=useForm()
    const {createUser} = useAuth()
    const handleRegister=(data)=>{
        console.log(data)
        createUser(data.email , data.password)
        .then((res)=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err.message)
        })

    }
    return (
        <div>
             <form onSubmit={handleSubmit(handleRegister)} className='card-body'>
                <fieldset className="fieldset ">
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
             </form>
        </div>
    );
};

export default Register;
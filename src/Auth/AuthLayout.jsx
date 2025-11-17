import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../Logo';
import bg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className=' max-w-7xl mx-auto '>
            <Logo></Logo>
           <div className='flex items-center justify-between py-15'>
            
            <Outlet></Outlet> 
           
           <figure className='  flex justify-center items-center'>
  <img className='bg-[#FAFDF0]  ' src={bg} alt="" />
           </figure>
           </div>
            </div>
          
         
        
    );
};

export default AuthLayout;
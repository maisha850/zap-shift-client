import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className=' min-h-screen flex flex-col justify-center items-center space-y-4 '>
            <img className='w-100 h-100 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdWMZ6NPJkPzOWv8Gbj7jVFYXKmzSOHLInQ&s" alt="" />
            <h1 className='text-7xl font-bold'>Error 404</h1>
            <Link to={'/'} className='btn btn-primary'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;
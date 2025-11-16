import React from 'react';
import { Outlet } from 'react-router';
import Navber from './Shared/Navber';
import Footer from './Shared/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <main className='pb-15'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;
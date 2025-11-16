import React from 'react';
import Banner from '../Componants/Banner';
import Brands from '../Componants/Brands';
import Reviews from '../Componants/Reviews';
const reviewPromise = fetch('/reviews.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div>
            <h3 className='text-2xl font-bold text-center mb-14 text-secondary'>We've helped thousands of sales teams</h3>
  <Brands></Brands>
          </div>
          <Reviews reviewPromise={reviewPromise} ></Reviews>
        
        </div>
    );
};

export default Home;
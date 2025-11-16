import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from '../assets/banner/banner1.png'
import bannerImg2 from '../assets/banner/banner2.png'
import bannerImg3 from '../assets/banner/banner3.png'

const Banner = () => {
    return (
        <div>
             <Carousel autoPlay={true} infiniteLoop={true}>
                <div className='relative'>
                    <img src={bannerImg1} />
                    <div className='absolute z-10 inset-0 right-180 top-115 left-20 flex  gap-3'>
                        <button className='btn btn-primary'>Track your Parcel</button>
                        <button className='btn btn-outline'>Be a Rider</button>
                    </div>
                   
                </div>
                <div className='relative'>
                    <img src={bannerImg2}/>
                     <div className='absolute z-10 inset-0 right-180 top-110 left-20 flex  gap-3'>
                        <button className='btn btn-primary'>Track your Parcel</button>
                        <button className='btn btn-outline'>Be a Rider</button>
                    </div>
                    
                </div>
                <div className='relative'>
                    <img src={bannerImg3} />
                     <div className='absolute z-10 inset-0 right-180 top-105 left-20 flex  gap-3'>
                        <button className='btn btn-primary'>Track your Parcel</button>
                        <button className='btn btn-outline'>Be a Rider</button>
                    </div>
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
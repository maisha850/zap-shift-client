import React, { use } from 'react';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewPromise}) => {
    const reviews = use(reviewPromise)
    console.log(reviews)
    return (
        <div>
            <div className='mb-15'>
<h3 className='text-center text-3xl font-bold text-secondary mt-20'>Reviews</h3>
<p className='text-center  text-gray-500 mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium officiis id quam magnam iure laboriosam autem non quos, nihil, est nostrum, voluptate quaerat impedit aliquid ipsum eveniet ad itaque porro!</p>
            </div>
              <Swiper
        effect={'coverflow'}
         spaceBetween={20}
             grabCursor={true}
             loop={true}
          
        
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        
             
          
        }}
          autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >

     
        {
            reviews.map(review=><SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>)
        }
       
     
      </Swiper>
        </div>
    );
};

export default Reviews;
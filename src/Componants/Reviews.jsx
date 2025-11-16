import React, { use } from 'react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewPromise}) => {
    const reviews = use(reviewPromise)
    console.log(reviews)
    return (
        <div>
            <div>
<h3 className='text-center text-3xl font-bold text-secondary'></h3>
            </div>
              <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
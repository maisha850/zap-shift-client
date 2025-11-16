import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const{userName, review: testimonial ,user_photoURL }=review
    return (
         <div className="max-w-sm bg-white p-6 rounded-xl shadow-md border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-300 text-3xl mb-3" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed">
    {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t mt-4 mb-4"></div>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
     <img className='w-10 h-10 rounded-full' src={user_photoURL} alt="" />

        <div>
          <h3 className="font-semibold text-teal-700">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;
import React from "react";
import { getStars } from '../../services/reviews';

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-60">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex justify-between p-5 border border-gray-300 rounded-lg"
        >
          <div className="flex-1 flex flex-col gap-2">
          <p className="font-bold">{review.reviewerName || 'Anonymous'}</p>
            <p>{new Date().toLocaleDateString()}</p>
            <p>{getStars(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={`https://i.pravatar.cc/150?img=${index}`}
              alt="Customer"
              className="rounded-full w-24 h-24"
            />
            <div className="flex items-center gap-2 mt-2">
              <img
                src={review.productThumbnail}
                alt="Product"
                className="w-12 h-12"
              />
              <p>{review.productTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

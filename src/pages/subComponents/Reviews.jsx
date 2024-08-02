import React, { useState } from "react";
import { getStars } from "../../services/reviews";

const Reviews = ({ reviews }) => {
  // State to manage the number of reviews shown
  const [visibleCount, setVisibleCount] = useState(10);
  const [showMore, setShowMore] = useState(true);

  // Handler to toggle between "View More" and "Show Less"
  const toggleReviews = () => {
    if (showMore) {
      setVisibleCount((prevCount) => Math.min(prevCount + 10, reviews.length));
      // Check if we have reached the end of reviews
      if (visibleCount + 10 >= reviews.length) {
        setShowMore(false);
      }
    } else {
      setVisibleCount(10);
      setShowMore(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-60">
        {reviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={index}
            className="flex justify-between p-5 border border-gray-300 rounded-lg"
          >
            <div className="flex-1 flex flex-col gap-2">
              <p className="font-bold">{review.reviewerName || "Anonymous"}</p>
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

              <div className="flex items-center  gap-2 mt-2">
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
      <div className="flex items-center justify-center my-20">
        <button
          onClick={toggleReviews}
          className="mt-4 px-8 py-2  border-2 italic  rounded "
        >
          {showMore ? "Show More Reviews" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;

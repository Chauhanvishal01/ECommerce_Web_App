import { Award, Clock, Tag } from "lucide-react";
import React from "react";

const Options = () => {
  return (
    <>
      <div className="my-28 p-20 h-[60vh]  ">
        <div className="flex  md:justify-between lg:justify-evenly items-center">
          <div className="flex flex-col  items-center">
            <Tag className="h-44 w-44 text-green-600" />
            <p className="text-2xl mt-5 font-semibold text-gray-600">Built to Last at Great Prices</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-44 w-44 text-yellow-600" />
            <p className="text-2xl mt-5 font-semibold text-gray-600">Top Rated by Our Customers</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <Clock className="h-44 w-44 text-blue-600" />
          <p className="text-2xl mt-5 font-semibold text-gray-600">30-Day Returns & Exchanges</p>
        </div>
      </div>
      <hr className="w-full  border"/>
    </>
  );
};

export default Options;

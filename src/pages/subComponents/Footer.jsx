import React from "react";
import { Facebook, Instagram, MailQuestion } from "lucide-react";
const Footer = () => {
  return (
    <div className="h-[50vh] py-20 ">
      <div className="flex flex-col text-center gap-6 justify-between md:justify-evenly md:flex-row ">
        <div className="flex flex-col gap-3">
          <a href="#">Best Sellers</a>
          <a href="#">New Arrivals</a>
          <a href="#">Kids</a>
          <a href="#">Solid Products</a>
          <a href="#">About Us</a>
          <a href="#">Privacy</a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="#">Contact</a>
          <a href="#">Happy Customer</a>

          <a href="#">Returns</a>

          <a href="#">Shipping</a>
        </div>
        <div>
          <p>Be the first to know about our biggest Sales.</p>
          <div className="flex items-center justify-between   my-3 relative border-b-2 border-black w-[50%] m-auto md:w-full">
            <input type="email" placeholder="Enter your email" className=" py-2 outline-none" />
            <span>
              <MailQuestion  className="text-rose-400"/>
            </span>
          </div>
          <div className="flex gap-4 mt-10  justify-center md:justify-start">
            <Instagram className="text-pink-400" />
            <Facebook  className="text-blue-400"/>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl mt-10">&copy; 2024 VishalChauhan</p>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed container top-0 mb-10 z-50 bg-white ">
      <div
        className={`flex gap-8 p-2 text-gray-700  justify-center md:justify-start transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <a href="#contact">Contact</a>
        <a href="#Reviews">Happy Customers</a>
        <a href="#Options">Returns</a>
        <a href="#Options">Shipping</a>
      </div>
      <div
        className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "py-10" : "my-16"
        }`}
      >
        <div className="flex items-center">
          <Search className="h-5 w-5 text-gray-600 md:h-10 md:w-10 cursor-pointer hover:text-red-500" />
        </div>
        <div className="uppercase flex flex-col md:flex-row gap-9 text-[10px] lg:text-sm items-center    tracking-[2px] ">
          <a href="#Products" className="hover:border-animation">
            Beauty Products
          </a>
          <span className="text-xl md:text-4xl text-rose-500 tracking-tighter">
            Product Pulse
          </span>
          <div className="relative group">
            <a href="#ProductCategory" className="hover:border-animation">
              Shop
            </a>
            <div className="absolute hidden group-hover:block w-56 md:w-64 bg-white shadow-lg p-2 mt-3 rounded">
              <a href="#ProductCategory" className="block px-5 py-3  hover:bg-gray-200">
                Skin Care
              </a>
             
              <a href="#ProductCategory" className="block px-5 py-3 hover:bg-gray-200">
                Kid's
              </a>
              <a href="#ProductCategory" className="block px-5 py-3 hover:bg-gray-200">
                Men's
              </a>
              <a href="#ProductCategory" className="block px-5 py-3 hover:bg-gray-200">
                Women's
                </a>
            </div>
          </div>

          <a href="#ProductCategory" className="hover:border-animation">
            Watches
          </a>
        </div>
        <div className="flex items-center">
          <ShoppingBag className="h-5 w-5 md:h-10 md:w-10 text-gray-600 cursor-pointer hover:text-red-500"  />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../services/product";
const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProduct();
      setProduct(products.slice(0, 8));
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 mb-40" id="Products">
      <h1 className="text-3xl text-center py-20 leading-[50px]">
        PERSONALIZED PRODUCTS <br /> MADE IN DIFFERENT COUNTRIES
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product p-8 border rounded shadow hover:scale-105 transition-transform duration-300"
          >
            <h2 className="font-bold text-lg mb-2 text-center">
              {product.title}
            </h2>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full  md:h-auto  object-cover mb-2"
            />
            <p className="text-gray-700">{product.description}</p>
            <p>
              <span className="relative  rotated-line-through mr-2 text-sm">
                ${product.price + 50}
              </span>
              <span className="font-semibold text-2xl text-rose-500">
                ${product.price}
              </span>
            </p>
            <p>
              Brand:{" "}
              <span className="text-rose-500 font-semibold">
                {product.brand}
              </span>
            </p>
            <p>
              Warranty :{" "}
              <span className="text-rose-500 font-semibold">
                {product.warrantyInformation}
              </span>
            </p>
            <p>
              Availability:{" "}
              <span className="text-rose-500 font-semibold">
                {product.availabilityStatus}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="text-center py-10">
        <button className="px-8 py-2 border shadow-lg bg-rose-400 text-white text-2xl hover:bg-rose-500 uppercase transition-all duration-300">
          view All
        </button>
      </div>
      <hr className="w-full  border" />
    </div>
  );
};

export default Products;

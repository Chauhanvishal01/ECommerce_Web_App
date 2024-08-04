import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchProductByCategory,
} from "../../services/category.js";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allCategories = await fetchCategories();

      const specificCategories = [
        "skin-care",
        "beauty",
        "womens-watches",
        "womens-jewellery",
      ];

      const filteredCategories = allCategories.filter((category) =>
        specificCategories.includes(category.slug)
      );

      const productsPromises = filteredCategories.map((category) =>
        fetchProductByCategory(category.slug)
      );

      const productsByCategory = await Promise.all(productsPromises);
      const categoriesWithImages = filteredCategories.map(
        (category, index) => ({
          ...category,
          image: productsByCategory[index][0]?.thumbnail || "",
        })
      );

      setCategories(categoriesWithImages);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-28 lg:h-[60vh]" id="ProductCategory">
      <h1 className="uppercase text-center my-10 text-3xl ">
        Shop By Category
      </h1>
      <div className="category-list grid grid-cols-1 md:grid-cols-4  gap-6 hover:cursor-pointer ">
        {categories.map((category, index) => (
          <div key={index} className="category p-4 border shadow w-[50%] m-auto md:border-0 md:shadow-none md:w-full   ">
            {category.image && (
              <img
                src={category.image}
                alt={category.name}
                className="w-full   object-cover hover:scale-105 transition-transform duration-300 "
              />
            )}
            <h2 className="font-light text-xl text-center mt-5">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
      <hr className="w-full  border mt-20"/>
    </div>
  );
};

export default Category;

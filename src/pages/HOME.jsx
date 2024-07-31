import React, { useState, useEffect } from "react";
import Header from "./subComponents/Header";
import Hero from "./subComponents/Hero";
import Deals from "./subComponents/Deals.jsx";
import Options from "./subComponents/Options.jsx";
import Category from "./subComponents/Category.jsx";
import Products from "./subComponents/Products.jsx";
import Reviews from "./subComponents/Reviews.jsx";
import Footer from "./subComponents/Footer.jsx";

import { fetchAllReviews } from "../services/api.js";

const HOME = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allReviews = await fetchAllReviews();
      setReviews(allReviews);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="container m-auto">
      <Header />
      <Hero />
      <Deals />
      <Category />
      <Options />
      <Products />
      <Reviews reviews={reviews} />
      <Footer />
    </main>
  );
};

export default HOME;

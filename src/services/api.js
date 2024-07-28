export const fetchAllReviews = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const reviewsWithProducts = await Promise.all(
      data.products.map(async (product) => {
        const reviewsResponse = await fetch(
          `https://dummyjson.com/products/${product.id}`
        );
        if (!reviewsResponse.ok) {
          throw new Error(`HTTP error! status: ${reviewsResponse.status}`);
        }
        const reviewsData = await reviewsResponse.json();
        return { ...product, reviews: reviewsData.reviews };
      })
    );

    return reviewsWithProducts.flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        productTitle: product.title,
        productThumbnail: product.thumbnail,
        reviewer: review.user ? review.user.name : "Anonymous", // Assuming the user object has a name property
      }))
    );
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

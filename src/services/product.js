export const fetchProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Product Not Fetch!!");
    }
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching Products", error);
    return [];
  }
};

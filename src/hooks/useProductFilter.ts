import { useState, useEffect } from "react";

const useProductFilter = (products: any[]) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("popular");

  useEffect(() => {
    let updatedProducts = [...products];

    // Apply filter
    if (filter !== "all") {
      updatedProducts = updatedProducts.filter((product) =>
        product.category === filter
      );
    }

    // Apply sorting
    if (sort === "price_low_high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_high_low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [filter, sort, products]);

  return { filteredProducts, filter, setFilter, sort, setSort };
};

export default useProductFilter;

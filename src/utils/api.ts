export const fetchProducts = async (query: string) => {
    const response = await fetch(`/api/products?${query}`);
    return response.json();
  };
  
  export const fetchProductDetails = async (slug: string) => {
    const response = await fetch(`/api/products/${slug}`);
    return response.json();
  };
  
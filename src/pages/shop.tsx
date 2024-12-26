import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";
import ProductCard from "@/components/Product/ProductCard";
import Header from "@/components/Layout/Header";
import sanityClient from "../config/sanity";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      let query = `*[_type == "product"]{
        _id,
        name,
        price,
        "imageUrl": images[0].asset->url
      }`;

      const data = await sanityClient.fetch(query);

      // Sort products based on the selected sort option
      if (sort === "price_low_high") {
        data.sort((a, b) => a.price - b.price);
      } else if (sort === "price_high_low") {
        data.sort((a, b) => b.price - a.price);
      }

      setProducts(data);
    };
    fetchProducts();
  }, [filter, sort, currentPage]);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Top Black Section */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 4,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom align="left">
            Shop Men's
          </Typography>
          <Typography variant="body1" align="left">
            Revamp your style with the latest designer trends in men's clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </Typography>
        </Container>
      </Box>

      {/* Product Section */}
      <Box sx={{ backgroundColor: "white", py: 4 }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                label="Sort by"
              >
                <MenuItem value="popular">Popular</MenuItem>
                <MenuItem value="price_low_high">Price: Low to High</MenuItem>
                <MenuItem value="price_high_low">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={4}>
            {currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Link href={`/product/${product._id}`} passHref>
                  <Box sx={{ textDecoration: 'none' }}>
                    <ProductCard product={product} />
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              sx={{ mx: 1 }}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Typography variant="body1" sx={{ mx: 2 }}>
              {currentPage} / {totalPages}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              sx={{ mx: 1 }}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ShopPage;
import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import Header from "@/components/Layout/Header";
import sanityClient from "../../config/sanity";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Please select a color and size before adding to cart.");
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity,
        size: selectedSize,
        color: selectedColor,
        image: getSelectedImageUrl(),
      },
    });

    setSnackbarOpen(true);
    setErrorMessage("");
  };

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const data = await sanityClient.fetch(
            `*[_type == "product" && _id == $id]{
              _id,
              name,
              price,
              description,
              "images": images[].asset->url,
              colors,
              sizes
            }`,
            { id }
          );
          if (!data || data.length === 0) {
            throw new Error("Product not found");
          }
          setProduct(data[0]);
          setError(null);
        } catch (err) {
          console.error("Failed to fetch product:", err);
          setError("Product not found or failed to load.");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    } else {
      setError("Invalid product ID");
      setLoading(false);
    }
  }, [id]);

  const getSelectedImageUrl = () => {
    if (!product || !product.colors || !product.images) return null;

    // Match selectedColor with the color name and get the corresponding image
    const colorIndex = product.colors.findIndex(
      (color) => color.colorName === selectedColor
    );

    // Return the corresponding image URL or fallback to the first image
    return product.images[colorIndex] || product.images[0];
  };

  const totalPrice = product ? (product.price * quantity).toFixed(2) : "0.00";

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Button
          variant="outlined"
          onClick={() => router.push("/shop")}
          sx={{
            mt: 4,
            borderColor: "black",
            color: "black",
            "&:hover": {
              borderColor: "black",
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Back to Shop
        </Button>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Grid container spacing={4}>
            {/* Left Side: Product Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  gridColumn: "1 / span 2",
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${getSelectedImageUrl()})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: 1,
                }}
              />
            </Grid>
            {/* Right Side: Product Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" color="text.primary" gutterBottom>
                ${product.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              {product.colors && product.colors.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Color
                  </Typography>
                  <ToggleButtonGroup
                    value={selectedColor}
                    exclusive
                    onChange={(e, newColor) => setSelectedColor(newColor)}
                    aria-label="color selection"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {product.colors.map((color) => (
                      <ToggleButton
                        key={color.colorName}
                        value={color.colorName}
                        aria-label={color.colorName}
                        sx={{
                          backgroundColor: color.hexCode,
                          color: "white",
                          "&.Mui-selected": {
                            backgroundColor: color.hexCode,
                            borderColor: "black",
                          },
                          "&:hover": {
                            backgroundColor: color.hexCode,
                            opacity: 0.8,
                          },
                          width: 40,
                          height: 40,
                          margin: 0.5,
                          borderRadius: "50%",
                        }}
                      />
                    ))}
                  </ToggleButtonGroup>
                </Box>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Size
                  </Typography>
                  <ToggleButtonGroup
                    value={selectedSize}
                    exclusive
                    onChange={(e, newSize) => setSelectedSize(newSize)}
                    aria-label="size selection"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {product.sizes.map((size) => (
                      <ToggleButton
                        key={size}
                        value={size}
                        aria-label={size}
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "black",
                            color: "white",
                          },
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                            opacity: 0.8,
                          },
                          width: 40,
                          height: 40,
                          margin: 0.5,
                        }}
                      >
                        {size}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              )}
              <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  sx={{
                    height: "40px",
                    backgroundColor: "black",
                    color: "white",
                    mr: 2,
                    fontSize: "14px",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "black",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Add to Cart - ${totalPrice}
                </Button>
                <TextField
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  inputProps={{
                    min: 1,
                    style: {
                      height: "16px",
                      padding: "8px",
                      fontSize: "14px",
                    },
                  }}
                  sx={{
                    width: "80px",
                    height: "40px",
                    "& .MuiOutlinedInput-root": {
                      height: "40px",
                    },
                  }}
                />
              </Box>
              {errorMessage && (
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                  {errorMessage}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product added to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductPage;

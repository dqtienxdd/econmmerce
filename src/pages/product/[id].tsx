import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Header from "@/components/Layout/Header";
import sanityClient from "../../config/sanity";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const data = await sanityClient.fetch(
          `*[_type == "product" && _id == $id]{
            _id,
            name,
            price,
            description,
            "imageUrl": images[0].asset->url,
            colors,
            sizes,
            sizeFitGuide,
            variations,
            shippingInfo,
            returnsInfo,
            rating,
            reviews
          }`,
          { id }
        );
        setProduct(data[0]);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Add to cart", { product, selectedColor, selectedSize, quantity });
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 18, display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={8} maxWidth="lg">
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.imageUrl}
                  alt={product.name}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.primary" gutterBottom>
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
                    sx={{ display: 'flex', flexWrap: 'wrap' }}
                  >
                    {product.colors.map((color) => (
                      <ToggleButton
                        key={color.colorName}
                        value={color.colorName}
                        aria-label={color.colorName}
                        sx={{
                          backgroundColor: color.hexCode,
                          color: 'white',
                          '&.Mui-selected': {
                            backgroundColor: color.hexCode,
                            borderColor: 'black',
                          },
                          '&:hover': {
                            backgroundColor: color.hexCode,
                            opacity: 0.8,
                          },
                          width: 40,
                          height: 40,
                          margin: 0.5,
                          borderRadius: '50%',
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
                    sx={{ display: 'flex', flexWrap: 'wrap' }}
                  >
                    {product.sizes.map((size) => (
                      <ToggleButton
                        key={size}
                        value={size}
                        aria-label={size}
                        sx={{
                          '&.Mui-selected': {
                            backgroundColor: 'black',
                            color: 'white',
                          },
                          '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
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
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  sx={{ height: '56px', backgroundColor: 'black', color: 'white', mr: 2 }}
                >
                  Add to Cart - ${totalPrice}
                </Button>
                <TextField
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '100px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductPage;
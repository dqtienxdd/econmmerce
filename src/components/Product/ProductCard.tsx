import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&:hover .product-image': {
          transform: 'scale(1.05)', // Reduced scale for a more subtle effect
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl}
        alt={product.name}
        className="product-image"
        sx={{ transition: 'transform 0.2s ease-in-out' }} // Adjusted transition duration
      />
      <CardContent>
        <Box sx={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.primary">
            ${product.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import Header from "@/components/Layout/Header";

const CartPage = () => {
  const { cart = [], dispatch } = useCart();
  const router = useRouter();

  const handleRemove = (id: number, size: string, color: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, size, color },
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

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
            Your Cart
          </Typography>
          <Typography variant="body1" align="left">
            Review your selected items and proceed to checkout.
          </Typography>
        </Container>
      </Box>

      {/* Cart Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Left Section - Cart Items */}
          <Grid item xs={12} md={8}>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <Box
                  key={`${item.id}-${index}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 4,
                    borderBottom: "1px solid #ccc",
                    pb: 2,
                  }}
                >
                  <img
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name || "Unnamed Product"}
                    style={{
                      width: 120,
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {item.name || "Unnamed Product"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Size: {item.size || "N/A"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Color: {item.color || "N/A"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity || 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price ? item.price.toFixed(2) : "0.00"}
                    </Typography>
                  </Box>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => handleRemove(item.id, item.size, item.color)}
                  >
                    Remove
                  </Button>
                </Box>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary">
                Your cart is empty.
              </Typography>
            )}

            {/* Order Information */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Order Information
              </Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Return Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This is our example return policy which is everything you
                    need to know about our returns.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Shipping Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Standard shipping, expedited shipping, and same-day delivery
                    are available. Prices vary depending on location and speed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          {/* Right Section - Order Summary */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Order Summary
            </Typography>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <span>Shipping:</span>
                <span>Calculated at the next step</span>
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography variant="h6" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter coupon code here"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { backgroundColor: "black" },
              }}
              onClick={handleCheckout}
            >
              Continue to Checkout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CartPage;

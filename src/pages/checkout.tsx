"use client";

import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Header from "@/components/Layout/Header";

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const { cart = [] } = useCart();
  const [selectedShipping, setSelectedShipping] = useState("standard");

  // Safely calculate total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + (item?.price || 0) * (item?.quantity || 1),
    0
  );

  const finalPrice =
    totalPrice + (selectedShipping === "express" ? 10 : 0);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Header />

      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 4,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Checkout
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Stepper activeStep={step} alternativeLabel>
          {["Address", "Shipping", "Payment"].map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            {step === 0 && (
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Address Information
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Address" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="City" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Country" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Zip Code" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                </form>
              </Box>
            )}

            {step === 1 && (
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Shipping Options
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {/* Standard Shipping Option */}
                    <Box
                      onClick={() => setSelectedShipping("standard")}
                      sx={{
                        border: selectedShipping === "standard" ? "2px solid black" : "1px solid #ccc",
                        borderRadius: 2,
                        p: 2,
                        cursor: "pointer",
                        transition: "border 0.2s",
                      }}
                    >
                      <Typography variant="body1" fontWeight="bold">
                        Standard Shipping (Free)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delivered in 4-7 Business Days
                      </Typography>
                    </Box>

                    {/* Express Shipping Option */}
                    <Box
                      onClick={() => setSelectedShipping("express")}
                      sx={{
                        border: selectedShipping === "express" ? "2px solid black" : "1px solid #ccc",
                        borderRadius: 2,
                        p: 2,
                        cursor: "pointer",
                        transition: "border 0.2s",
                      }}
                    >
                      <Typography variant="body1" fontWeight="bold">
                        Express Shipping ($10.00)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delivered in 2-3 Business Days
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {step === 2 && (
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Payment Information
                </Typography>
                <form>
                  <TextField
                    label="Cardholder Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Card Number"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Expiry Date (MM/YY)"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="CVC" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                </form>
              </Box>
            )}

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                {step > 0 && (
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{
                      color: "black",
                      borderColor: "black",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      "&:focus": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      "&:active": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    Back
                  </Button>
                )}
                {step < 2 ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (step === 1 && !selectedShipping) {
                        alert("Please select a shipping option.");
                        return;
                      }
                      handleNext();
                    }}
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                      "&:focus": {
                        backgroundColor: "black",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                      "&:active": {
                        backgroundColor: "black",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => alert("Order placed!")}
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                      "&:focus": {
                        backgroundColor: "black",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                      "&:active": {
                        backgroundColor: "black",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    Place Order
                  </Button>
                )}
              </Box>



          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Your Cart
            </Typography>
            <Divider />
            {cart.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 2,
                  borderBottom: "1px solid #ccc",
                }}
              >
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name || "Unnamed Product"}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Box sx={{ ml: 2, flexGrow: 1 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.name || "Unnamed Product"}
                  </Typography>
                  <Typography variant="body2">
                    Size: {item.size || "N/A"}, Color: {item.color || "N/A"}
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity || 1}
                  </Typography>
                  <Typography variant="body2">
                    ${item.price ? item.price.toFixed(2) : "0.00"}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Total:</span> <span>${finalPrice.toFixed(2)}</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckoutPage;

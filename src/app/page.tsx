"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Box, Typography, Container, Grid } from "@mui/material";
const DynamicHeader = dynamic(() => import("../components/Layout/Header"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <DynamicHeader />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 10,
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Container>
            <Typography
              variant="h3"
              gutterBottom
              fontWeight="bold"
              sx={{ color: "#333" }}
            >
              Better Clothing for the Planet
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 4, color: "#555", maxWidth: 600, mx: "auto" }}
            >
              Create screens directly in Method or add your images from Sketch
              or Figma. You can even sync designs from your cloud storage!
            </Typography>
            <Box sx={{ mt: 4, textAlign: "center" }}>
             
            </Box>
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://i.pinimg.com/736x/9a/ce/68/9ace68a46a5824772bedb0b85fc179ce.jpg"
                  alt="Fashion Image 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://i.pinimg.com/736x/84/8d/c7/848dc743196b9fea812588337634c351.jpg"
                  alt="Fashion Image 2"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://i.pinimg.com/736x/1d/eb/f8/1debf85e81bc4d958dab3ebbf2648057.jpg"
                  alt="Fashion Image 3"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Featured Section */}
        <Box sx={{ py: 6 }}>
          <Container>
           
            <Grid container spacing={4} justifyContent="center">
              {/* Add logos */}
              <Grid item>
                {/* Logo 1 */}
              </Grid>
              <Grid item>
                {/* Logo 2 */}
              </Grid>
              <Grid item>
                {/* Logo 3 */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default HomePage;
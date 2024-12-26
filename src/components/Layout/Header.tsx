"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const isHomePage = pathname === "/";

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isHomePage ? "inherit" : "black",
        color: isHomePage ? "black" : "white",
        borderBottom: `2px solid ${isHomePage ? "black" : "white"}`,
      }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Ecommerce
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              href="/shop"
              sx={{ color: isHomePage ? "black" : "white" }}
            >
              Shop
            </Button>
            <Button
              color="inherit"
              href="/stories"
              sx={{ color: isHomePage ? "black" : "white" }}
            >
              Stories
            </Button>
            <Button
              color="inherit"
              href="/about"
              sx={{ color: isHomePage ? "black" : "white" }}
            >
              About
            </Button>
          </Box>

          {/* Search and Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit">
              <SearchIcon sx={{ color: isHomePage ? "black" : "white" }} />
            </IconButton>
            <IconButton color="inherit" href="/cart">
              <ShoppingCartIcon
                sx={{ color: isHomePage ? "black" : "white" }}
              />
            </IconButton>
            <Button
              color="inherit"
              href="/login"
              startIcon={<AccountCircleIcon />}
              sx={{ color: isHomePage ? "black" : "white" }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

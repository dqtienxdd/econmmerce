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
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useCart } from "../../contexts/CartContext";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  let cart = [];
  try {
    ({ cart } = useCart());
  } catch (error) {
    console.warn("useCart must be used within a CartProvider:", error);
  }

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
          {/* Logo Link */}
          <Link href="/" passHref>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "none",
                color: isHomePage ? "black" : "white",
              }}
            >
              Ecommerce
            </Typography>
          </Link>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
            <Button href="/shop" sx={{ color: isHomePage ? "black" : "white" }}>
              Shop
            </Button>
            <Button href="/stories" sx={{ color: isHomePage ? "black" : "white" }}>
              Stories
            </Button>
            <Button href="/about" sx={{ color: isHomePage ? "black" : "white" }}>
              About
            </Button>
          </Box>

          {/* Action Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <SearchIcon sx={{ color: isHomePage ? "black" : "white" }} />
            </IconButton>
            <IconButton href="/cart">
              <Badge badgeContent={cart.length || 0} color="secondary">
                <ShoppingCartIcon sx={{ color: isHomePage ? "black" : "white" }} />
              </Badge>
            </IconButton>
            <Button
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

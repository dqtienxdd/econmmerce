import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Layout/Header"; // Adjust the path if necessary
import { Box, Typography, TextField, Button, Checkbox, Link, Grid, Container } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Login successful!");
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Form */}
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Login to continue
          </Typography>
          <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 3 }}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Lock />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: "left" }}>
              <Checkbox color="primary" />
              <Typography
                variant="body2"
                component="span"
                sx={{ cursor: "pointer", color: "textSecondary" }}
              >
                Remember me
              </Typography>
              <Link
                href="#"
                variant="body2"
                sx={{ ml: 2, textDecoration: "none", cursor: "pointer" }}
                onClick={() => alert("Redirect to forgot password page!")}
              >
                Forgot Password?
              </Link>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => router.push("/signup")}
              >
                Create one
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;

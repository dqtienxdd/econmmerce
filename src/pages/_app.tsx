"use client";

import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../utils/createEmotionCache";
import theme from "../theme";
import { CartProvider } from "../contexts/CartContext";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps {
  Component: React.ElementType;
  emotionCache?: EmotionCache;
  pageProps: any;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Wrap the entire application with CartProvider */}
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

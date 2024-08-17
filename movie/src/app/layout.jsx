'use client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import ScrollToTop from "./components/scroll";
import Footer from "./components/footer";

function ThemeWrapper({ children }) {
  const isDark = useSelector((state) => state.movie.isDark);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeWrapper>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer/>
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}

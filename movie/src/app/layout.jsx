'use client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import React from "react";
import ScrollToTop from "./components/scroll";
import Footer from "./components/footer";
import "./global.css";

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
            <main>
              {children}
            </main>
            <ScrollToTop />
            <Footer />
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}

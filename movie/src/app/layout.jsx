'use client'
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Navbar from "./components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar/>
        {children}
        </ThemeProvider>
       </body>
    </html>
  );
}

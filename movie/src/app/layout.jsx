'use client'
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Provider } from "react-redux";
import {store} from "./redux/store"
import Navbar from "./components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
          <Navbar/>
          {children}
          </Provider>
        </ThemeProvider>
       
       </body>
    </html>
  );
}

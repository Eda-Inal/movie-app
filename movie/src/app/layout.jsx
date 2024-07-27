'use client'
import { ThemeProvider } from "@emotion/react";
import { darkTheme} from "./theme";
import { Provider } from "react-redux";
import {store} from "./redux/store"
import Navbar from "./components/Navbar";





export default function RootLayout({ children }) {
 

  
  return (
    <html lang="en">
      
      <body>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme }>
          
          <Navbar/>
          {children}
          </ThemeProvider>
          </Provider>
        
       
       </body>
    </html>
  );
}

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
          },
        },
  
 
  palette: {
    mode: 'dark',
    primary: {
      main: "#1F3864",
    },
    secondary: {
      main: "#00C6C2",
      contrastText: '#fff',
    },
    accent: {
      main: "#00B38A"
    },
    textColor:{
        main:"#fff"
    },
    sideBarColor : {
        main:"#2D2D30"
    },
    error: {
      main: "#DA4242"
    },
    themeColor:{
        main: "#F9F871"
            },
    success: {
      main: "#1ECB12",
      contrastText: '#000',
    },
    background: {
      default: "#1c1c1e",
      paper: "#032d4a"
    },
    text: {
      primary: "#fff",
    }
  },

  
  typography: {
fontFamily:  "Roboto",
    fontSize: 18,
  },
  
});


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#032d4a",
    },
    secondary: {
      main: "#00C6C2",
      contrastText: '#fff',
    },
    textColor:{
        main:"#3A3B3C"
    },
    themeColor:{
main: "#313549"
    },
    accent: {
      main: "#00B38A"
    },
    error: {
      main: "#DA4242"
    },
    success: {
      main: "#1ECB12",
      contrastText: '#000',
    },
    sideBarColor : {
        main:"#DDDDD2"
    },
    background: {
      default: "#F1F1E6",
      paper: "#fff"
    },
    text: {
      primary: "#3A3B3C",
    }
  },
  typography: {
    fontFamily: 'Open sans',
    fontSize: 18,
  }
});

export { darkTheme, lightTheme };

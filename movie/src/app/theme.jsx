import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#1F3864",
    },
    secondary: {
      main: "#618CF6",
      contrastText: '#fff',
    },
    accent: {
      main: "#5EECBE"
    },
    textColor:{
        main:"#fff"
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
      default: "#313549",
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
      main: "#618CF6",
      contrastText: '#fff',
    },
    textColor:{
        main:"#3A3B3C"
    },
    themeColor:{
main: "#313549"
    },
    accent: {
      main: "#70FACB"
    },
    error: {
      main: "#DA4242"
    },
    success: {
      main: "#1ECB12",
      contrastText: '#000',
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

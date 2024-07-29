import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#032d4a",
    },
    secondary: {
      main: "#00C6B7",
      contrastText: '#fff',
    },
    accent: {
      main: "#FFF7D6"
    },
    error: {
      main: "#DA4242"
    },
    success: {
      main: "#1ECB12",
      contrastText: '#000',
    },
    background: {
      default: "#032d4a",
      paper: "#032d4a"
    },
    text: {
      primary: "#fff",
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 18,
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#032d4a",
    },
    secondary: {
      main: "#00C6B7",
      contrastText: '#fff',
    },
    accent: {
      main: "#FFF7D6"
    },
    error: {
      main: "#DA4242"
    },
    success: {
      main: "#1ECB12",
      contrastText: '#000',
    },
    background: {
      default: "#fff",
      paper: "#fff"
    },
    text: {
      primary: "#000",
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 18,
  }
});

export { darkTheme, lightTheme };

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
      main: "#1c1c1e",
    },
    secondary: {
      main: "#00C6C2",
      contrastText: '#fff',
    },
    accent: {
      main: "#00B38A"
    },
    textColor: {
      main: "#fff"
    },
    sideBarColor: {
      main: "#2D2D30"
    },
    error: {
      main: "#DA4242"
    },
    themeColor: {
      main: "#ECF31A"
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
    fontFamily: 'sans-serif',
    fontSize: 18,
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      [ 'md']: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      ['md']: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      ['md']: {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      ['md']: {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      ['md']: {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      ['md']: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      ['md']: {
        fontSize: '1.25rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      ['md']: {
        fontSize: '1.125rem',
      },
    },
  },
});

const lightTheme = createTheme({
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
    mode: 'light',
    primary: {
      main: "#032d4a",
    },
    secondary: {
      main: "#00C6C2",
      contrastText: '#fff',
    },
    textColor: {
      main: "#3A3B3C"
    },
    themeColor: {
      main: "#06319B"
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
    sideBarColor: {
      main: "#DDDDD2"
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
    fontFamily: 'sans-serif',
    fontSize: 18,
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      ['md']: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      ['md']: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      ['md']: {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      ['md']: {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      ['md']: {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      ['md']: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      ['md']: {
        fontSize: '1.25rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      ['md']: {
        fontSize: '1.125rem',
      },
    },
  },
});

export { darkTheme, lightTheme };

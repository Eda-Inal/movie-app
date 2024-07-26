import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
           main:"#032d4a"
        },
        secondary:{
            main:"#00C6B7",
            contrastText: '#fff',
        },
        accent:{
            main:"#77FAC6"
        },
        error:{
            main:"#DA4242"
        },
        success:{
            main:"#1ECB12",
            contrastText: '#000',
        }
    },
   breakpoints:{
    xs: 0,
    sm: 400,
    md: 700,
    lg: 1200,
    xl: 1536,
   }
    
    
   
})
theme.typography.h1 ={
    fontSize: '35px',
    '@media (min-width:700px)': {
      fontSize: '50px',
    },}
theme.typography.h2 ={
    
    fontSize: '28px',
    '@media (min-width:700px)': {
      fontSize: '35px',
    }
}
theme.typography.h3 ={
    fontSize: '24px',
    '@media (min-width:700px)': {
      fontSize: '28px',
    }
}
theme.typography.h4 ={
    fontSize: '16px',
    '@media (min-width:700px)': {
      fontSize: '20px',
    }
}
theme.typography.h5 ={
    fontSize: 16,
}
    

export default theme;
'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Button, Typography ,Divider,FormControl,Select,selectedGenre,MenuItem} from '@mui/material';
import her from "../../../public/her.jpg";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Watchlist() {
  const isDark = useSelector((state) => state.movie.isDark);
  return (
  <>
    <Box sx={{
 width:"90%",
 mt:"1.2rem",
 mx:"auto",
    }}
    
    > 
    <Typography variant='h3'>
      My list
    </Typography>
    </Box>
    <Grid container spacing={2} sx={{width:"90%", mx:"auto", mt:"1.5rem"}}>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
        <Box
          sx={{
            position: 'relative',
            height: 400,
            borderRadius: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${her.src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
         
            }
          }}
        >
     
            
            <Box sx={{ position:"absolute",right:10,top:10} }>
     
              <FavoriteOutlinedIcon sx={{color:"#FF1938"}} fontSize="small" />
            </Box>
     
        </Box>
      </Grid>
      
    ))}
   
    
  </Grid>
  
    </>
    )
}

export default Watchlist

'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import her from "../../../public/her.jpg";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Home() {
  const isDark = useSelector((state) => state.movie.isDark);
  return (
    <>
      <Box 
        sx={{
          width: '80%',
          height: '50vh',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: '10px' ,
          background: 'rgba(0, 0, 0, 0.5)' ,
          borderRadius: '16px',
        }}
      >
        <Image
          src={her}
          layout="fill"
          objectFit="cover"
          alt="Movie Image"
          style={{ filter: 'brightness(60%)' }} 
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            color: 'white',
            padding: '16px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <Typography variant="h4">Titanic</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">Romance</Typography>
            <Typography variant="body1">3h 15m</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Button variant="contained" color="secondary">Watch Now <PlayCircleOutlineIcon /></Button>
            <Button variant="outlined" color="secondary">Add to Wishlist</Button>
          </Box>
        </Box>
      </Box>

      <Box 
        sx={{
          width: '80%',
          margin: '0 auto',
          padding: '16px 0'
        }}
      >
        <Grid container spacing={2}>
          {[...Array(8)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  height: 200, 
                  borderRadius: '16px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                     '&:hover': {
                    transform: 'scale(1.05)'},
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
                    opacity: isDark ? "0.5" : "0.8"
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: 'calc(100% - 16px)',
                    padding: '4px 8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '9px'
                  }}
                >
                  <Typography variant="body2">Titanic</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Typography variant="body2">8.3</Typography>
                    <FavoriteBorderIcon fontSize="small" />
                  </Box>
                 
               
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px'
          }}
        >
          <Button variant="contained" color="secondary">Load More</Button>
        </Box>
      </Box>
    </>
  );
}

export default Home;


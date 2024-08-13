'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import Alert from '../components/alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/popularSlice'
import { Grid, Box, Typography , Tooltip} from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import InfoIcon from '@mui/icons-material/Info';
import Detail from '../details/page';
import { selectedPopularMovie,togglePopularDetail,addFavoruiteMovie } from '../redux/popularSlice';
import { removeFavoruiteMovie,setHideAlert,setShowAlert } from '../redux/movieSlice';

const Best = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, isDetailVisible } = useSelector((state) => state.popularMovies);
  const {showAlert} =  useSelector((state) => state.movie)
  const handleInfoClick = (movie) => {
    dispatch(selectedPopularMovie(movie));
    dispatch(togglePopularDetail(true));
  };

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
      
 const handleFavouriteMovie = (movie) => {
    dispatch(addFavoruiteMovie(movie)); 

    dispatch(setShowAlert());
  
    setTimeout(() => {
    dispatch(setHideAlert());
    }, 500)
  };
  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6">Error: {error}</Typography>;

  return (
    <Grid style={{ width: '90%', margin: '0 auto', padding: '20px' }}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <Box
              sx={{
                position: 'relative',
                height: 400,
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  transform: 'scale(1.05)'
                },
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                layout="fill"
                objectFit="cover"
                alt={movie.title}
                objectPosition="top" 
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                  color: 'white',
                  padding: '8px',
                  borderRadius: '4px',
                  width: 'calc(100% - 16px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                  {movie.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <StarOutlinedIcon sx={{color:"#ffc300"}} color="#ffc300" fontSize='25px'/>
                  <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                    {movie.vote_average.toFixed(1)}
                  </Typography>
                </Box>
              </Box>
              <Box 
  sx={{
    position: 'absolute',
    top: 15,
    right: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px' 
  }}
>
  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', 
      borderRadius: '50%', 
      padding: '2px', 
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)', 
        backgroundColor: '#FF1938',
      }
    }}
  >
    <Tooltip title="add to wishlist">
       <FavoriteBorderIcon 
       onClick = {()=> handleFavouriteMovie(movie)}
      fontSize='small'  
      sx={{ 
        color: '#FF1938',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: 'white',
        }
      }} 
    />
    </Tooltip>
   
  </Box>
  
  <Box 

    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', 
      borderRadius: '50%', 
      padding: '2px', 
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)', 
        backgroundColor: '#FFC107', 
      }
    }}
  >
    <Tooltip title="see the detail">
<InfoIcon 
 onClick={() => handleInfoClick(movie)}
      fontSize='small'  
      sx={{ 
        color: '#FFC107',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: 'white',
        }
      }} 
    />
    </Tooltip>
    
  </Box>
</Box>
            </Box>
            {isDetailVisible && <Detail />}
          </Grid>
        ))}
      </Grid>
      {showAlert && <Alert />}
    </Grid>
    
  );
};

export default Best

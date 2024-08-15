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
import { selectedPopularMovie,togglePopularDetail,addFavoruiteMovie,removePopularFavoruiteMovie  } from '../redux/popularSlice';
import { removeFavoruiteMovie,setHideAlert,setShowAlert } from '../redux/movieSlice';

const Best = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, isDetailVisible, favoritePopularMovieIds } = useSelector((state) => state.popularMovies);
  const {showAlert} =  useSelector((state) => state.movie)
  const handleInfoClick = (movie) => {
    dispatch(selectedPopularMovie(movie));
    dispatch(togglePopularDetail(true));
  };

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
      
  const handleFavouriteMovie = (movie) => {
    if (favoritePopularMovieIds.includes(movie.id)) {
      dispatch(removePopularFavoruiteMovie (movie));
      dispatch(setShowAlert({
        message: 'Movie removed from Watchlist!',
        color: 'error.main',
      }));
    } else {
      dispatch(addFavoruiteMovie(movie));
      dispatch(setShowAlert({
        message: 'Movie added to Watchlist!',
        color: 'success.main',
      }));
    }
  
    setTimeout(() => {
      dispatch(setHideAlert());
    }, 1000);
  };
  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6">Error: {error}</Typography>;

  return (
    <>
      <Box 
  sx={{ 
    width:"90%",
    textAlign: 'left',
    margin:"0 auto " ,
    fontWeight: '600', 
    marginTop: '15px', 
   

  }}
>
  <Box sx={{
    display:"flex",
    alignItems:"center",
    
  }}
  
  ><Typography color="secondary.main" variant='h2' marginRight={1}> Discover </Typography>
  <Typography variant='h4'>the Latest Blockbusters</Typography>
  </Box>

</Box>
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
      border: '2px solid #FF1938',
      backgroundColor: favoritePopularMovieIds.includes(movie.id) ? '#FF1938' : 'white', 
      color: favoritePopularMovieIds.includes(movie.id) ? 'white' : '#FF1938',
      borderRadius: '50%', 
      padding: '2px', 
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.3)', 
 
      }
    }}
  >
    <Tooltip title={favoritePopularMovieIds.includes(movie.id) ? "remove from wishlist" : "add to wishlist"}>
       <FavoriteBorderIcon 
       onClick = {()=> handleFavouriteMovie(movie)}
      fontSize='small'  
      sx={{ 
        color: 'inherit',
       
        
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
      border: '2px solid #FFC107',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.3)', 
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
    </>
    
    
  );
};

export default Best

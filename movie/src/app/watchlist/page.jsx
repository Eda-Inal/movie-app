'use client'
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFavoruiteMovie } from '../redux/movieSlice';
import { Grid, Box, Typography,Tooltip } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Image from 'next/image';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { removePopularFavoruiteMovie } from '../redux/popularSlice';

function Watchlist() {
  const dispatch = useDispatch();
  const { favouriteMoviesTopRated } = useSelector((state) => state.movie);
  const {favouriteMoviesPopular} = useSelector((state =>state.popularMovies ))
  const handleRemove = (movie) => {
    dispatch(removeFavoruiteMovie(movie))
    dispatch(removePopularFavoruiteMovie(movie))
  }
  const allFavouriteMovies = [
    ...favouriteMoviesTopRated, 
    ...favouriteMoviesPopular.filter(
      popularMovie => !favouriteMoviesTopRated.some(
        topRatedMovie => topRatedMovie.id === popularMovie.id
      )
    )
  ];

  return (
    <>
      <Box sx={{ width: '90%', margin: '1.2rem auto' }}>
        <Typography variant="h3">My List</Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: '90%', margin: '1.5rem auto' }}>
        {allFavouriteMovies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Box sx={{ position: 'relative', height: 400, borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',  transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' } }}>
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} layout="fill" objectFit="cover" alt={movie.title} />
              <Box sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="white" variant="body1">{movie.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StarOutlinedIcon sx={{color:"#ffc300"}} color="#ffc300" fontSize='25px'/>
                  <Typography color="white" variant="body1">{movie.vote_average.toFixed(1)}</Typography>
                </Box>
              </Box>
              <Box sx={{
                position:"absolute",
                top:10,
                right:15,
                backgroundColor: 'white', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%', 
                padding: '2px', 
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)', 
                  backgroundColor: '#FF1938',
                }
              }}>
                <Tooltip title="remove from list">
<FavoriteOutlinedIcon fontSize='small' onClick={()=>handleRemove(movie)}  sx={{
  color: '#FF1938',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'white',
  }
  
  }}/>
                </Tooltip>

              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Watchlist;

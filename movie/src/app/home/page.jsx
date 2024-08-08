'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/movieSlice';
import { Grid, Box, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const isDark = useSelector((state) => state.movie.isDark);
  const genres = [
    "Action", "Comedy", "Drama", "Fantasy", "Horror",
    "Mystery", "Romance", "Thriller", "Western", "Sci-Fi"
  ];
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none', }, width: '80%', marginTop: "12px", mx: "auto" }}>
        <FormControl fullWidth>
          <Select
            value={selectedGenre}
            onChange={handleGenreChange}
            displayEmpty
            sx={{
              color: isDark ? "white" : "#000",
              borderColor: 'rgba(128, 128, 128, 0.6)',
              borderWidth: '2px',
              borderRadius: '8px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                borderColor: 'rgba(128, 128, 128, 0.8)',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(128, 128, 128, 0.6)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(128, 128, 128, 0.8)',
              },
              '& .MuiSelect-select': {
                backgroundColor: isDark ? '#1c1c1e' : '#F1F1E6',
              },
              '& .MuiSvgIcon-root': {
                color: isDark ? "white" : "#000",
              },
              '& .MuiPaper-root': {
                backgroundColor: isDark ? '#1c1c1e' : '#F1F1E6',
              },
              '& .MuiMenuItem-root': {
                backgroundColor: isDark ? '#1c1c1e' : '#F1F1E6',
                color: isDark ? "white" : "#000",
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }
              }
            }}
          >
            <MenuItem value="" disabled>
              Select Genre
            </MenuItem>
            {genres.map((genre, index) => (
              <MenuItem key={index} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box 
  sx={{
    width: '80%',
    height: '60vh',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '10px',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)'
    },
  }}
>
  {movies.length > 0 && (
    <Image
      src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`} 
      layout="fill"
      objectFit="cover"
      alt={movies[0].title}
      style={{ filter: 'brightness(60%)' }}
    />
  )}
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
      gap: '8px',
    }}
  >
    <Typography variant="h4">
      {movies.length > 0 ? movies[0].title : "Featured Movie Title"}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body1">
        {movies.length > 0 ? movies[0].genre : "Genre"}
      </Typography>
      <Typography variant="body1">
        {movies.length > 0 ? `${movies[0].runtime} min` : "Duration"}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: '8px', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize' }}>
        <PlayCircleOutlineIcon fontSize='small' /> Watch Now
      </Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        sx={{ 
          textTransform: 'capitalize', 
          borderWidth: '2px', 
          borderColor: 'secondary.main', 
          backdropFilter: 'blur(50px)' 
        }}
      >
        <AddCircleOutlineRoundedIcon fontSize='small' /> Add to Wishlist
      </Button>
    </Box>
  </Box>
</Box>

      <Box sx={{ width: '80%', margin: '0 auto', padding: '16px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <Grid container spacing={2}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
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
                        <FavoriteBorderIcon fontSize="small" />
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                          {movie.vote_average.toFixed(1)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}> 
              <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize' }}>
                Load more
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: { xs: 'none', md: 'block' }, }}>
              {genres.map((genre, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    width: '100%',
                    marginBottom: '8px',
                    textTransform: 'capitalize',
                    color: isDark ? "white" : "#000",
                    borderColor: 'rgba(128, 128, 128, 0.6)',
                    borderWidth: '2px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(128, 128, 128, 0.2)', 
                      borderColor: 'rgba(128, 128, 128, 0.8)',
                    },
                  }}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;

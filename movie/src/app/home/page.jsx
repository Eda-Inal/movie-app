'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies , incrementPage} from '../redux/movieSlice';
import { Grid, Box, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


function Home() {
  const dispatch = useDispatch();
  const { movies, currentPage, totalPages, isDark } = useSelector((state) => state.movie);
  console.log(movies)
  const genres = [
    "Action", "Comedy", "Drama", "Fantasy", "Horror",
    "Mystery", "Romance", "Thriller", "Western", "Sci-Fi"
  ];
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    dispatch(fetchTopRatedMovies(currentPage)); 
  }, [dispatch, currentPage]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchTopRatedMovies(currentPage + 1)); 
  };

  return (
    <>
   

      <Box 
        sx={{
          width: '90%',
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
            objectPosition="top" 
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
      <Box sx={{ width: '90%', margin: '0 auto', padding: '16px 0' }}>
        <Grid container spacing={3}>
          {movies.slice(1).map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Box 
                sx={{
                  height:300,
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  
               layout="fill"
                  objectFit="cover"
                  alt={movie.title}
                  objectPosition="top" 
                />
                <Box sx={{
                  position:"absolute",
                  backgroundColor: "rgba(0, 0, 0, .7)",
                  color:"whitesmoke",
                  bottom:0,
               width:"100%",
                  height:"20%",
                  display:"flex",
                   justifyContent:"space-between",
                }}>
               
             <Box sx={{
              width:"60%",
              marginLeft:"10px"
             }}>
             <Typography color="white" >{movie.title}</Typography>
             </Box>
<Box sx={{
display:"flex",
flexDirection:"column",
alignContent:"left",
marginRight:"6px"
}}>
  <Typography color="white" variant='h6'>{movie.release_date.slice(0,4)}</Typography>
  <Box sx={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around"
    } }>
<Typography color="white" variant='h6'>{movie.vote_average.toFixed(1)}</Typography>
<StarOutlinedIcon sx={{color:"#ffc300"}}  fontSize='25px'/>
  </Box> 
</Box>
                </Box>
            <Box 
  sx={{
    position: 'absolute',
    top:15,
    right: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
    borderRadius: '50%', 
    padding: '8px', 
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)', 
      backgroundColor: '#FF1938',
    }
  }}
>
  <FavoriteBorderIcon 
    fontSize='small'  
    sx={{ 
      color: '#FF1938',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: 'white',
      }
    }} 
  />
</Box>

              </Box>
            </Grid>
          ))}
        </Grid>
        {currentPage < totalPages && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button variant="contained" onClick={handleLoadMore} disabled={currentPage >= totalPages} color='secondary'>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Home;

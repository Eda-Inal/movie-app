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
   
   <Box sx={{width:"90%",margin:"0 auto"}}>
   <Box 
  sx={{ 
 
  width:"100%",
    margin:"0 auto " ,
    fontWeight: '600', 
    marginTop: '15px', 
    marginBottom: '25px',

  }}
>
  <Box sx={{
    display:"flex",
    alignItems:"center",
    flexDirection:{xs:"column",md:"row"},
 justifyContent:{xs:"center",md:"start"}
  
    

    
  }}
  
  ><Typography color="secondary.main" variant='h2' marginRight={1} sx={{
    mb:{xs:1,sm:0}
  }}> Your Personal Watchlist:</Typography>
  <Typography variant='h4'>Movies You Love</Typography>
  </Box>

</Box>
  
  
</Box>
<Box  sx={{width:"90%",  margin:"0 auto",
  display:"flex",  justifyContent:{xs:"center",md:"start"},
}}>
{!allFavouriteMovies.length && (
    <Box 
      sx={{
        maxWidth:"400px",
 
        mt: {xs:1,md:2},
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "error.main",
        color: "white",
        display: "flex",
        alignItems: "center",
       
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        animation: "fadeIn 1s ease-in",
      }}
    >
      <Typography variant='h5' sx={{ fontWeight: 600, flexGrow: 1 }}>
        You have no favorite movies yet
      </Typography>
      <Box 
        component="span" 
        sx={{ 
          display: "inline-block",
          width: "24px",
          height: "24px",
          backgroundColor: "white",
          borderRadius: "50%",
          color: "#f44336",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          marginLeft: "10px",
        }}
      >
        !
      </Box>
    </Box>
  )}
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
                backgroundColor:"white",
                border: '2px solid #FF1938',
                color:"#FF1938",
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.3)', 
            
                }
              }}>
                <Tooltip title="remove from list">
<FavoriteOutlinedIcon fontSize='small' onClick={()=>handleRemove(movie)}  sx={{
  
  transition: 'color 0.3s ease',
  
  
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

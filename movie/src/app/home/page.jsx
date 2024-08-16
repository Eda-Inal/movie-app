'use client'
import React, { useEffect, useState } from 'react';
import Alert from '../components/alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies , incrementPage, setSelectedMovie,toggleDetail,addFavoruiteMovie,removeFavoruiteMovie,setShowAlert,setHideAlert,setAddIcon} from '../redux/movieSlice';
import { Grid, Box, Typography, Button, FormControl, Select, MenuItem,Tooltip } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import InfoIcon from '@mui/icons-material/Info';
import Detail from '../details/page';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';




function Home() {
  const dispatch = useDispatch();
  const { movies, currentPage, totalPages,loading, isDark,isDetailOpen,showAlert, favoriteMovieIds,selectedMovie,addIcon} = useSelector((state) => state.movie);

  


  useEffect(() => {
    dispatch(fetchTopRatedMovies(currentPage)); 
  }, [dispatch, currentPage]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleLoadMore = () => {
    dispatch(incrementPage());
   
  };
  const handleMovieSelect = (movie) => {
    dispatch(setSelectedMovie(movie)); 
    dispatch(toggleDetail(true)); 
   

  };

  const handleBackDrop= (movie) => {
    dispatch(setSelectedMovie(movie));
  }
  const handleFavouriteMovie = (movie) => {
    if (favoriteMovieIds.includes(movie.id)) {
      dispatch(removeFavoruiteMovie(movie));
      dispatch(setAddIcon())
      dispatch(setShowAlert({
        message: 'Movie removed from Watchlist!',
        color: 'error.main',
      }));
    } else {
      dispatch(addFavoruiteMovie(movie));
      dispatch(setAddIcon())
      dispatch(setShowAlert({
        message: 'Movie added to Watchlist!',
        color: 'success.main',
      }));
    }
  
    setTimeout(() => {
      dispatch(setHideAlert());
    }, 1000);
  };
  
  const featuredMovie = selectedMovie || movies[0];

  return (
    <>
    {loading && (
      <Box 
        sx={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'black', 
          zIndex: 9999,
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <HourglassBottomIcon sx={{ fontSize: '48px', marginBottom: '16px' }} />
          <Typography variant="h4">Loading...</Typography>
        </Box>
      </Box>
         )}   
  <Box 
  sx={{ 
    width:"90%",
    textAlign: 'left',
    margin:"0 auto " ,
    fontWeight: '600', 
    marginTop: '15px', 
    marginBottom: '25px',

  }}
>
  <Box sx={{
    display:"flex",
    alignItems:"center",
    flexDirection:{xs:"column",sm:"row"},
    
    
  }}
  
  ><Typography color="secondary.main" variant='h2' sx={{
    mb:{xs:1,sm:0}
  }} marginRight={1}>Top Rated Films:</Typography>
  <Typography variant='h4'>A Curated Collection</Typography>
  </Box>

</Box>

  
   

      <Box 
        sx={{
          width: {xs:"95%",sm:"90%"},
          height: {xs:"50vh",sm:"70vh"},
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
        
        {featuredMovie  && (
          <Image
          src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          alt={featuredMovie.title}
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
            backgroundColor:"rgba(0,0,0,0.6)",
            gap: '8px',
          }}
        >
          <Typography variant="h4">
            {featuredMovie ? featuredMovie.title : "Featured Movie Title"}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">
            {featuredMovie ? featuredMovie.genre : "Genre"}
            </Typography>
           
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize' }}>
              <PlayCircleOutlineIcon fontSize='small' sx={{marginRight:0.5}} /> Watch Now
            </Button>
            <Button
  onClick={() => handleFavouriteMovie(featuredMovie)}
  variant="outlined" 
  color="secondary" 
  sx={{ 
    textTransform: 'capitalize', 
    borderWidth: '2px', 
    borderColor: 'secondary.main', 
    backdropFilter: 'blur(50px)' 
  }}
>
{
  favoriteMovieIds.includes(featuredMovie.id) ? (
    <>
      <CheckCircleOutlineOutlinedIcon fontSize='small' sx={{marginRight:0.5}} /> Added to Wishlist
    </>
  ) : (
    <>
      <AddCircleOutlineRoundedIcon fontSize='small' sx={{marginRight:0.5}} /> Add to Wishlist
    </>
  )
}
</Button>

          </Box>
        </Box>
      </Box>
      <Box sx={{ width: {xs:"95%",sm:"90%"}, margin: '0 auto', padding: '20px 0' }}>
        <Grid container spacing={3}>
          {movies.slice(0, currentPage * 12 ).map((movie, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
              <Box   
                sx={{
                  height:400,
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
                    top:"50%",
                  left:"50%",
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: "rgba(0, 0, 0, .7)",
                  borderRadius:"50%",
                  display:"flex",
                  alignItems:"center",
                
                 

                 
                 
                

                }}><PlayCircleFilledWhiteOutlinedIcon color='white' sx={{fontSize:"60px", '&:hover': {
                  transform: 'scale(1.1)',
                },
}}/>

                </Box>
                <Box
                sx={{
                  position: 'absolute',
                  top: 15,
                  left: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  
                }}
              >
               
                <Typography variant="h5">HD</Typography>
              </Box>
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
      <StarOutlinedIcon sx={{color:"#ffc300"}} color="#ffc300" fontSize='25px'/>
<Typography color="white" variant='h6'>{movie.vote_average.toFixed(1)}</Typography>
  </Box> 
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
    backgroundColor: favoriteMovieIds.includes(movie.id) ? '#FF1938' : 'white', 
    color: favoriteMovieIds.includes(movie.id) ? 'white' : '#FF1938',
    border: '2px solid #FF1938',
    borderRadius: '50%',
    padding: '2px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.3)',
    },
  }}
>
  <Tooltip title={favoriteMovieIds.includes(movie.id) ? "remove from wishlist" : "add to wishlist"}>
    <FavoriteBorderIcon
      onClick={() => handleFavouriteMovie(movie)}
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
onClick={() => handleMovieSelect(movie)} 
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
      {isDetailOpen && <Detail />}
      {showAlert && <Alert />}
      
      
    </>
  );
}

export default Home;

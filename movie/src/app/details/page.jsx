'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { StarOutlined as StarOutlinedIcon, Close as CloseIcon } from '@mui/icons-material';
import { toggleDetail } from '../redux/movieSlice';
import { clearSelectedPopularMovie, togglePopularDetail } from '../redux/popularSlice';
import { fetchCast } from '../redux/castSlice';
import Image from 'next/image';
import genres from "../genres.json";


function Detail() {
  const dispatch = useDispatch();


  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const selectedPopularMovie = useSelector((state) => state.popularMovies.selectedPopularMovie);
  const isDetailOpen = useSelector((state) => state.movie.isDetailOpen);
  const isDetailVisible = useSelector((state) => state.popularMovies.isDetailVisible);
  const cast = useSelector((state) => state.cast.cast);

  const handleClose = () => {
    dispatch(toggleDetail(false));
    dispatch(togglePopularDetail(false));
    dispatch(clearSelectedPopularMovie());
  };


  const movie = selectedPopularMovie || selectedMovie;
  const isVisible = isDetailVisible || isDetailOpen;

  if (!movie || !isVisible) return null;
  const genreNames = movie.genre_ids.map(genreId => {
    const genre = genres.find(g => g.id === genreId);
    return genre ? genre.name : null;
  }).filter(name => name).join(', ');
  useEffect(() => {
    if (movie) {
      dispatch(fetchCast(movie.id));
    }
  }, [movie, dispatch]);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Box
          sx={{
            width: { xs: '80%', md: '40%' },
            backgroundColor: 'rgba(52, 58, 64, 0.9)',
            color: 'white',
            borderRadius: '1rem',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'left',
            paddingLeft: '0.7rem',
            paddingY: '15px',
          }}
        >
          <Typography variant="h4" sx={{ mb: '10px' }}>{movie.title}</Typography>
          <Box width={200} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '10px' }}>
            <StarOutlinedIcon sx={{ color: '#ffc300', fontSize: '19px' }} />
            <Typography variant="h6">{movie.vote_average.toFixed(1)}</Typography>
            <Typography>Vote count: {movie.vote_count}</Typography>
          </Box>
          <Typography variant="h6">
            {movie.overview}
          </Typography>
          <Typography variant="h6" sx={{ my: '10px' }}>{movie.release_date.slice(0, 4)}</Typography>
          <Typography variant="h6">
            {genreNames}
          </Typography>

          <Typography variant="h6" sx={{ mb: "5px" }}>Cast:</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {cast.map(actor => (
              <Box
                key={actor.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '80px',
                  height: '110px',
                  padding: '5px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Image
                  width={45}
                  height={68}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  style={{ borderRadius: '4px' }}
                />
                <Box
                  sx={{
                    marginTop: '5px',
                    textAlign: 'center',
                    fontSize: '10px',
                    color: 'white',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {actor.name}
                </Box>
              </Box>
            ))}
          </Box>
          <CloseIcon onClick={handleClose} color="accent" sx={{
            fontSize: '1.6rem',
            cursor: 'pointer',
            position: 'absolute',
            top: '1rem',
            right: '5px',
            transition: 'transform 0.3s ease, color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#FF1938',
            },
          }} />
        </Box>
      </Box>
    </>
  );
}

export default Detail;

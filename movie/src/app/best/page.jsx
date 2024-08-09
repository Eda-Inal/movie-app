'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/popularSlice'
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Best = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

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
    </Grid>
  );
};

export default Best

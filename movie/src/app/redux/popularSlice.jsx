
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPopularMovies = createAsyncThunk(
  'popularMovies/fetchPopularMovies',
  async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3d6f6952453bf34233cb9f9eb9cd3739');
    const data = await response.json();
    return data.results;
  }
);

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default popularMoviesSlice.reducer;

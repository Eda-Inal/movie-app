import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const fetchMovieVideo = createAsyncThunk(
  'video/fetchMovieVideo',
  async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
    return response.data.results;
  }
);

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchMovieVideo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default videoSlice.reducer;

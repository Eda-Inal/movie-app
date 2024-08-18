import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const fetchCast = createAsyncThunk(
  'cast/fetchCast',
  async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    return response.data.cast.slice(0, 6); 
  }
);
export const castSlice = createSlice({
    name:"cast",
    initialState:{
        cast: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCast.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCast.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cast = action.payload;
          })
          .addCase(fetchCast.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export default castSlice.reducer
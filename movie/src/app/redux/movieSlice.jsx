import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPopularMovies = createAsyncThunk(
  'movie/fetchPopularMovies',
  async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3d6f6952453bf34233cb9f9eb9cd3739');
    const data = await response.json();
    return data.results; 
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    isSidebar: false,
    isDark: true,
    isFavourite: false,
    loading: false,
    error: null
  },
  reducers: {
    setSidebar: (state, action) => {
      state.isSidebar = action.payload;
    },
    setIsDark: (state) => {
      state.isDark = !state.isDark;
    },
    setIsFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    }
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

export const { setSidebar, setIsDark } = movieSlice.actions;
export default movieSlice.reducer;

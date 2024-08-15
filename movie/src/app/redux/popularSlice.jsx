
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
    error: null,
    selectedPopularMovie: null,
    isDetailVisible: false,
    favouriteMoviesPopular: [],
    favoritePopularMovieIds: [],
  }, reducers:{
    selectedPopularMovie(state, action) {
      state.selectedPopularMovie = action.payload;
    },
    togglePopularDetail(state, action) {
      state.isDetailVisible = action.payload;
    },
    clearSelectedPopularMovie(state) {
      state.selectedPopularMovie = null;
    },
    addFavoruiteMovie: (state,action) => {
      const movieExists = state.favouriteMoviesPopular.find((movie) =>movie.id === action.payload.id);
      if(!movieExists){
        state.favouriteMoviesPopular.push(action.payload);
        state.favoritePopularMovieIds.push(action.payload.id);
      }
          },
          removePopularFavoruiteMovie : (state,action) => {
            state.favouriteMoviesPopular = state.favouriteMoviesPopular.filter((movie) => movie.id !== action.payload.id);
            state.favoritePopularMovieIds = state.favoritePopularMovieIds.filter(
              (id) => id !== action.payload.id
            );
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
export const { selectedPopularMovie, togglePopularDetail, clearSelectedPopularMovie, addFavoruiteMovie,removePopularFavoruiteMovie } = popularMoviesSlice.actions
export default popularMoviesSlice.reducer;

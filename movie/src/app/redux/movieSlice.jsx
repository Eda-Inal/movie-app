import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopRatedMovies = createAsyncThunk(
  'movie/fetchTopRatedMovies',
  async (page) => { 
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3d6f6952453bf34233cb9f9eb9cd3739&page=${page}`);
    const data = await response.json();
    console.log('API Data:', data);
    return data; 
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    currentPage: 1,
    totalPages: 1,
    isSidebar: false,
    isDark: true,
    isFavourite: false,
    loading: false,
    error: null,
    selectedMovie: null, 
    isDetailOpen: false, 
    favouriteMoviesTopRated: [],
    showAlert: false,
    favoriteMovieIds: [],
    alertMessage: '',
      alertColor: 'secondary.main'

  },
  reducers: {
  
setShowAlert :(state,action) => {
  state.showAlert = true
  state.alertMessage = action.payload.message;
  state.alertColor = action.payload.color;
},
setHideAlert : (state,action) => {
  state.showAlert = false
  
},
    setSidebar: (state, action) => {
      state.isSidebar = action.payload;
    },
    setIsDark: (state) => {
      state.isDark = !state.isDark;
    },
    setIsFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
    incrementPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    setSelectedMovie: (state, action) => {  
      state.selectedMovie = action.payload;
    },
    toggleDetail: (state, action) => { 
      state.isDetailOpen = action.payload;
    },
    addFavoruiteMovie: (state,action) => {
const movieExists = state.favouriteMoviesTopRated.find((movie) =>movie.id === action.payload.id);
if(!movieExists){
  state.favouriteMoviesTopRated.push(action.payload);
  state.favoriteMovieIds.push(action.payload.id);
}
    },
    removeFavoruiteMovie : (state,action) => {
      state.favouriteMoviesTopRated = state.favouriteMoviesTopRated.filter((movie) => movie.id !== action.payload.id);
      state.favoriteMovieIds = state.favoriteMovieIds.filter(
        (id) => id !== action.payload.id
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.movies = [...state.movies, ...action.payload.results || []]; 
        state.totalPages = action.payload.total_pages || state.totalPages; 
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setSidebar, setIsDark, incrementPage,setSelectedMovie, toggleDetail,addFavoruiteMovie,removeFavoruiteMovie,setShowAlert,setHideAlert } = movieSlice.actions;
export default movieSlice.reducer;
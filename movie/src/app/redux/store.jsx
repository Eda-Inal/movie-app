import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./movieSlice"
import popularReducer from "./popularSlice"

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    popularMovies : popularReducer
  },
})
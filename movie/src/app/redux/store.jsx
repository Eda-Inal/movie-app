import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./movieSlice"
import popularReducer from "./popularSlice"
import castReducer from './castSlice'

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    popularMovies : popularReducer,
    cast:castReducer
  },
})
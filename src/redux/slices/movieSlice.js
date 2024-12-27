// src/redux/slices/movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for movies
const initialState = {
  movieList: [],
};

// Creating slice for movies
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
    addMovie: (state, action) => {
      state.movieList.push(action.payload);
    },
    clearMovies: (state) => {
      state.movieList = [];
    },
  },
});

// Exporting actions for movieSlice
export const { setMovies, addMovie, clearMovies } = movieSlice.actions;

// Exporting reducer for store configuration
export default movieSlice.reducer;

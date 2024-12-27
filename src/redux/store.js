// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import genreReducer from './slices/genreSlice';  // Import genre slice
import movieReducer from './slices/movieSlice';  // Import movie slice
import favoriteReducer from './slices/favoriteSlice';  // Import favorites slice

// Configuring Redux store with the reducers
const store = configureStore({
  reducer: {
    genres: genreReducer,  // Reducer for genres
    movies: movieReducer,  // Reducer for movies
    favorite: favoriteReducer,  // Reducer for favorites
  },
});

export default store;  // Export the store for use in the app

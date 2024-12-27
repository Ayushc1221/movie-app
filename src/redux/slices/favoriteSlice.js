// src/redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state for favorites 
const initialState = {
  favorites: [] // Changed 'favorite' to 'favorites'
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    // Action to toggle a movie's favorite status
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      const index = state.favorites.indexOf(movieId); // Changed 'favorite' to 'favorites'
      if (index > -1) {
        // If movie is already in favorites, remove it
        state.favorites.splice(index, 1); // Changed 'favorite' to 'favorites'
      } else {
        // If movie is not in favorites, add it
        state.favorites.push(movieId); // Changed 'favorite' to 'favorites'
      }
    },
  },
});

// Export the action creator for toggling favorites
export const { toggleFavorite } = favoriteSlice.actions;
// Export the reducer to be used in the store
export default favoriteSlice.reducer;

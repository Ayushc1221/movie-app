import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoriteSlice'; // Correct path to your slice

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; // Get movie data passed from the previous screen
  const dispatch = useDispatch(); // Use dispatch to update Redux store
  const favorites = useSelector(state => state.favorite.favorites); // Access the favorites state from Redux
  const isFavorite = favorites.includes(movie.id); // Check if the current movie is in favorites

  // Fallback for missing data
  const moviePoster = movie.poster || 'https://via.placeholder.com/300'; // Default poster image if missing
  const movieDescription = movie.plot || 'No description available.'; // Use plot for description
  const movieTitle = movie.title || 'Untitled'; // Fallback title if missing
  const movieReleaseYear = movie.year || 'N/A'; // Use year for release year
  const movieGenre = movie.genre ? movie.genre.join(', ') : 'Unknown'; // Handle genre array and fallback if empty

  // Function to toggle favorite
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(movie.id)); // Dispatch to add/remove from favorites
  };

  console.log('Movie data:', movie); // Log movie data to verify the fields

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Movie Poster */}
        <Image source={{ uri: moviePoster }} style={styles.image} />

        {/* Movie Title */}
        <Text style={styles.title}>{movieTitle}</Text>

        {/* Movie Description */}
        <Text style={styles.description} numberOfLines={5}>
          {movieDescription} {/* This will now show the plot */}
        </Text>

        {/* Movie Additional Details */}
        <Text style={styles.details}>
          <Text style={styles.detailLabel}>Release Year:</Text> {movieReleaseYear}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailLabel}>Genre:</Text> {movieGenre}
        </Text>

        {/* Button to Toggle Favorite */}
        <Button
          title={isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
          onPress={handleToggleFavorite}
          color={isFavorite ? '#ff6347' : '#4CAF50'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the container to be scrollable while keeping content centered
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    backgroundColor: '#f9f9f9',
  },
  container: {
    width: '90%', // Adjust width to fit the screen with some padding
    maxWidth: 600, // Maximum width to ensure it doesn't stretch too much
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  detailLabel: {
    fontWeight: 'bold',
  },
});

export default MovieDetailScreen;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { toggleFavorite } from '../redux/slices/favoriteSlice';

// Get screen width dynamically
const { width } = Dimensions.get('window');

// Function to calculate responsive card dimensions
const getCardDimensions = () => {
  const isMobile = width <= 600; // Mobile devices (small screens)
  const isTablet = width > 600 && width <= 900; // Tablet devices (medium screens)
  
  // Adjust the number of cards per row and card width based on screen size
  const cardsPerRow = isMobile ? 2 : isTablet ? 3 : 4; // 2 cards for mobile, 3 for tablet, 4 for larger screens
  
  const cardWidth = (width - 20 * (cardsPerRow + 1)) / cardsPerRow; // 20 is for margin space
  const cardHeight = cardWidth * 1.5; // Maintain aspect ratio

  return { cardWidth, cardHeight, cardsPerRow };
};

const { cardWidth, cardHeight } = getCardDimensions(); // Get responsive card dimensions

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Use useNavigation to get the navigation prop
  const favorites = useSelector(state => state.favorite.favorites); // Changed 'favorite' to 'favorites'
  const isFavorite = favorites.includes(movie.id);

  const handleFavoritePress = () => {
    dispatch(toggleFavorite(movie.id));
  };

  const handlePress = () => {
    navigation.navigate('MovieDetail', { movie }); // Navigate to MovieDetail screen
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>
        <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
          <Text style={styles.favoriteText}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10, // Horizontal margin for spacing between cards
    marginVertical: 10,   // Vertical margin for spacing between cards
  },
  image: {
    width: '100%', // Full width of the card
    height: '75%', // 75% of the card height
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 14,  // Retain original font size
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
    color: '#333',
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 18,  // Retain original font size
    color: 'red',
  },
});

export default MovieCard;

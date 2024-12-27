import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../api/moviesApi';
import { toggleFavorite } from '../redux/slices/favoriteSlice';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import useResponsiveTypography from '../styles/useResponsiveTypography';

// Function to calculate responsive number of columns
const calculateNumColumns = (width) => {
  if (width <= 600) {
    return 2; // Two cards for mobile
  } else if (width > 600 && width <= 900) {
    return 3; // Three cards for tablet
  } else {
    return 4; // Four cards for larger screens
  }
};

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numColumns, setNumColumns] = useState(calculateNumColumns(Dimensions.get('window').width));
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorite.favorite);

  // Use responsive typography
  const typography = useResponsiveTypography();

  // Fetch movies on initial load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Unable to fetch movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Dynamically update column count and screen width on resize
  useEffect(() => {
    const handleResize = () => {
      const width = Dimensions.get('window').width;
      setWindowWidth(width);
      setNumColumns(calculateNumColumns(width));
    };

    Dimensions.addEventListener('change', handleResize);
    return () => Dimensions.removeEventListener('change', handleResize);
  }, []);

  const handleFavoritePress = (movieId) => {
    console.log('Toggling favorite for movie ID: ', movieId);
    dispatch(toggleFavorite(movieId));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!filteredMovies.length) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>No movies found. Try another search.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null} // Only apply when more than 1 column
        key={numColumns} // Re-render list when numColumns changes
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, { width: windowWidth / numColumns - 10 }]}>
            <MovieCard
              movie={item}
              onPress={() => navigation.navigate('MovieDetail', { movie: item })}
              onFavoritePress={() => handleFavoritePress(item.id)}
              isFavorite={favoriteMovies && favoriteMovies.includes(item.id)}
            />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    margin: 5,
  },
  listContent: {
    paddingBottom: 20, // Extra padding at the bottom
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;

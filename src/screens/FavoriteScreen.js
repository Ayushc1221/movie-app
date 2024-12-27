import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

// Assuming `movies` is available as a prop or from a global state
const FavoritesScreen = ({ navigation, movies }) => {
  const favoriteIds = useSelector(state => state.favorites.favorites);
  const favoriteMovies = movies.filter(movie => favoriteIds.includes(movie.id));

  if (!favoriteMovies.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No Favorites Yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMovies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate('MovieDetail', { movie: item })}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});

export default FavoritesScreen;

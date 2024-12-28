import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteScreen = ({ navigation, movies }) => {
  const favoriteIds = useSelector(state => {
    console.log('State in useSelector:', state);  // Debugging statement
    return state.favorite.favorites;
  });

  if (!movies) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Movies data is not available</Text>
      </View>
    );
  }

  const favoriteMovies = movies.filter(movie => favoriteIds.includes(movie.id));

  if (!favoriteMovies.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No Favorite Yet!</Text>
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

export default FavoriteScreen;

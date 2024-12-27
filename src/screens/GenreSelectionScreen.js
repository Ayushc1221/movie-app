import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native';

const GenreSelectionScreen = ({ navigation }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🎬</Text>
      </View>
      <Text style={styles.title}>Select Your Favorite Genres</Text>
      <View style={styles.genresContainer}>
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre}
            style={[
              styles.genreButton,
              selectedGenres.includes(genre) && styles.genreButtonSelected,
            ]}
            onPress={() => toggleGenre(genre)}
          >
            <Text
              style={[
                styles.genreText,
                selectedGenres.includes(genre) && styles.genreTextSelected,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 50,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  genreButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: (width - 60) / 3 - 10, // Adjusts for 3 buttons per row
  },
  genreButtonSelected: {
    backgroundColor: '#6C63FF',
  },
  genreText: {
    color: '#000',
    textAlign: 'center',
  },
  genreTextSelected: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GenreSelectionScreen;



import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search Movies..."
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default SearchBar;

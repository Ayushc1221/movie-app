import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenreChip = ({ genre, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.chip, isSelected && styles.selectedChip]}
    onPress={onPress}
  >
    <Text style={[styles.text, isSelected && styles.selectedText]}>
      {genre}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  chip: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
    margin: 5,
    backgroundColor: '#fff',
  },
  selectedChip: {
    backgroundColor: '#6200ea',
    borderColor: '#6200ea',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  selectedText: {
    color: '#fff',
  },
});

export default GenreChip;

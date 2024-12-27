import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

// Import the responsive typography hook
import useResponsiveTypography from '../styles/useResponsiveTypography';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  // Use responsive typography
  const typography = useResponsiveTypography();

  const handleNext = () => {
    if (name.trim() !== '') {
      navigation.navigate('GenreSelection');
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        {/* Movie Icon */}
        <Image
          source={{ uri: 'https://img.icons8.com/ios/100/000000/film-reel.png' }}
          style={styles.icon}
        />

        {/* Title and Subtitle */}
        <Text style={[styles.title, { fontSize: typography.title.fontSize }]}>
          Welcome to My Movies
        </Text>
        <Text style={[styles.subtitle, { fontSize: typography.subtitle.fontSize }]}>
          Let’s get to know you!
        </Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        {/* Next Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={[styles.buttonText, { fontSize: typography.button.fontSize }]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contentBox: {
    width: width * 0.85,
    height: height * 0.8, // Rectangular container with horizontal emphasis
    padding: 100,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '50%', // Shorter input box
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  button: {
    width: '30%', // Shorter button
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

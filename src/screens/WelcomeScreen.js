import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
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
          Welcome to My Movies-App
        </Text>
        <Text style={[styles.subtitle, { fontSize: typography.subtitle.fontSize }]}>
          Let’s get to know you!
        </Text>

        {/* Name Input */}
        <TextInput
          style={[styles.input, { fontSize: typography.body.fontSize }]}
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
    padding: 10, // Add padding to avoid content touching edges
  },
  contentBox: {
    width: '90%', // Percentage-based width to adjust dynamically
    height: '80%', // Responsive height
    maxWidth: 500, // Maximum width for large devices
    paddingHorizontal: '5%', // Padding for responsive layout
    paddingVertical: '8%', // Vertical padding
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
    width: '12%', // Relative width to the parent container
    height: '10%', // Responsive height based on container
    marginBottom: '10%',
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    marginBottom: '5%', // Margin to create space between subtitle and input
    textAlign: 'center',
  },
  input: {
    width: '70%', // Input width is based on screen size, with a max-width for large devices
    height: 45, // Slightly larger input height
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
    fontSize: 16, // Adjust font size inside input
  },
  button: {
    width: '50%', // Adjust the button size based on screen width
    height: 50,
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

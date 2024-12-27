// src/styles/useResponsiveTypography.js
import { useWindowDimensions, Platform } from 'react-native';

// Function to calculate responsive typography sizes
const useResponsiveTypography = () => {
  const { width } = useWindowDimensions(); // Get screen width

  // Define breakpoints for responsive design
  const isMobile = width <= 600; // Define screen size threshold (mobile vs. larger screens)
  const isTablet = width > 600 && width <= 900; // Define tablet screen size range

  // Adjust typography sizes based on platform and screen size
  const typography = {
    title: {
      fontSize: isMobile
        ? 18 // Mobile: smaller font size
        : isTablet
        ? 22 // Tablet: medium font size
        : 24, // Larger screens: larger font size
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: isMobile
        ? 16 // Mobile: smaller font size
        : isTablet
        ? 18 // Tablet: medium font size
        : 20, // Larger screens: larger font size
      fontWeight: '600',
      color: '#666',
    },
    body: {
      fontSize: isMobile
        ? 14 // Mobile: smaller font size
        : isTablet
        ? 16 // Tablet: medium font size
        : 18, // Larger screens: larger font size
      color: '#333',
    },
    button: {
      fontSize: isMobile
        ? 14 // Mobile: smaller font size
        : isTablet
        ? 16 // Tablet: medium font size
        : 18, // Larger screens: larger font size
      fontWeight: 'bold',
      color: '#fff',
    },
    chipText: {
      fontSize: isMobile
        ? 12 // Mobile: smaller font size
        : isTablet
        ? 14 // Tablet: medium font size
        : 16, // Larger screens: larger font size
      color: '#555',
    },
    chipTextSelected: {
      fontSize: isMobile
        ? 12 // Mobile: smaller font size
        : isTablet
        ? 14 // Tablet: medium font size
        : 16, // Larger screens: larger font size
      color: '#fff',
    },

    // Adjust for web specifically
    web: {
      title: {
        fontSize: 28, // Larger size for web
      },
      subtitle: {
        fontSize: 22, // Larger size for web
      },
      body: {
        fontSize: 18, // Larger size for web
      },
      button: {
        fontSize: 18, // Larger size for web
      },
    },
  };

  // Apply platform-specific adjustments if needed (e.g., for web)
  if (Platform.OS === 'web') {
    typography.title.fontSize = typography.web.title.fontSize;
    typography.subtitle.fontSize = typography.web.subtitle.fontSize;
    typography.body.fontSize = typography.web.body.fontSize;
    typography.button.fontSize = typography.web.button.fontSize;
  }

  return typography;
};

export default useResponsiveTypography;

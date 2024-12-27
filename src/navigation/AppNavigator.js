import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screens
import BottomTabs from './BottomTabs';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GenreSelectionScreen from '../screens/GenreSelectionScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* Welcome Screen */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }} // Hides header on Welcome screen
      />

      {/* Genre Selection Screen */}
      <Stack.Screen
        name="GenreSelection"
        component={GenreSelectionScreen}
        options={{ headerShown: false }} // Hides header on Genre Selection screen
      />

      {/* Main screen with Bottom Tabs navigation */}
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }} // Hides header on Main screen
      />

      {/* Movie Detail Screen */}
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ title: 'Movie Details' }} // Title set for Movie Detail screen
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

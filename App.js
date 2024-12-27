import React from 'react';
import { Provider } from 'react-redux'; // Provides Redux store to the app
import { NavigationContainer } from '@react-navigation/native'; // Handles navigation container for the app
import AppNavigator from './src/navigation/AppNavigator'; // Importing AppNavigator which holds the stack navigator
import store from './src/redux/store'; // Updated import path for the Redux store

export default function App() {
  return (
    // Wrapping the entire app in the Redux Provider to give components access to the Redux store
    <Provider store={store}>
      {/* Wrapping the AppNavigator in NavigationContainer to manage navigation state */}
      <NavigationContainer>
        {/* AppNavigator contains the stack and tab navigation */}
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

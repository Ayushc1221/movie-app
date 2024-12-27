// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen'; // Import HomeScreen component
import FavoriteScreen from '../screens/FavoriteScreen'; // Import FavoriteScreen component
// import SettingsScreen from '../screens/SettingsScreen'; // Uncomment if you have SettingsScreen

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Netflix"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff', // Customize background color of the tab bar
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
      }}
    >
      {/* Home Screen Tab */}
      <Tab.Screen
        name="Netflix"
        component={HomeScreen}
        options={{
          headerShown: false, // Hide header for Home
          tabBarLabel: 'Home', // Label for the tab
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/home.png')} // Path to home icon
              style={{ width: size, height: size, tintColor: color }} // Icon style
            />
          ),
        }}
      />
      
      {/* Favorites Screen Tab */}
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen} // Make sure to import and set up this screen
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/favorites.png')} // Path to favorites icon
              style={{ width: size, height: size, tintColor: color }} // Icon style
            />
          ),
        }}
      />
      
      {/* Uncomment and add Settings screen if needed */}
      {/* 
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/settings.png')} // Path to settings icon
              style={{ width: size, height: size, tintColor: color }} // Icon style
            />
          ),
        }}
      /> 
      */}
    </Tab.Navigator>
  );
};

export default BottomTabs;

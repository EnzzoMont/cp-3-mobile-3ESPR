import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from './src/navigation/RootTabNavigator'; 
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootTabNavigator />
    </NavigationContainer>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from './src/navigation/RootTabNavigator'; // Importa nosso navegador principal
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    // O NavigationContainer é o "pai" de toda a navegação
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootTabNavigator />
    </NavigationContainer>
  );
}
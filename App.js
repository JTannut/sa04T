import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Weather from './components/Weather';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const doIt = () => {
    console.log('DO');
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ZipCodeScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator> 
  </NavigationContainer>       

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderColor: 'gray',
    borderWidth: 0,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

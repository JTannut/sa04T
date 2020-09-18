import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Weather from './components/Weather';

export default function App() {

  const doIt = () => {
    console.log('DO');
  }
  return (
    <View style={styles.container}>
      <Text onPress={doIt}> 6135512016 </Text>
      <StatusBar style="auto" />
      <Weather zipCode='83120'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 0,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

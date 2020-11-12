import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import logo from './Image/Logo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         placeholder="Paste Link"
         value={value}
        />
        <Button
         title="Submit"
         color="#841584"
         accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }

  
});

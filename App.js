import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, StatusBar } from 'react-native';
import { Constants, MapView, Google } from 'expo';
import { Header, Icon } from 'react-native-elements'; // 0.17.0

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Oup App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

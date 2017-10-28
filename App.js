import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, StatusBar } from 'react-native';
import { Constants, MapView, Google } from 'expo';
import { Header, Icon } from 'react-native-elements'; // 0.17.0

export default class App extends Component {
  state = {
    mapRegion: { latitude: 40.00, longitude: -105.2724, latitudeDelta: 0.0522, longitudeDelta: 0.0021 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _handleButtonPress = () => {
    Alert.alert(
      'Our Mission',
      'You did it!',
    );
  };

 

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        
           <Header
                leftComponent={{ icon: 'menu', color: '#fff', size: 40 }}
                centerComponent={{ text: 'Pear', style: { color: '#fff', fontSize: 32 } }} 
                rightComponent={{ icon: 'account-box', color: '#fff', size: 40 }}
         />
  
        <MapView
          style={{ alignSelf: 'stretch', height: 520 , marginBottom: 10, marginTop: 40 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        
        />
      
       
        <Button 
          title="Host"
          onPress={this._handleButtonPress}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A4C639'
  },
  paragraph: {
    margin: 4,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, StatusBar } from 'react-native';
import { Constants, MapView, Google } from 'expo';
import { Header, Icon } from 'react-native-elements'; // 0.17.0
import Expo from 'expo';
//import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    mapRegion: { latitude: 39.9295749, longitude: -105.0971474, latitudeDelta: 0.0522, longitudeDelta: 0.0021 }
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
          region={this.state.mapRegion}>
          <MapView.Marker
            key={1}
            coordinate={{latitude: 39.9295749, longitude: -105.0971474}}
            title={"Jeff's Casa"}
            description={"Pizza"}
          />
          
          </MapView>

      
       
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
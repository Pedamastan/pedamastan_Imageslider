
import React, { Component } from 'react';
import {
  View,
  Text, 
  StyleSheet,BackHandler 
} from 'react-native';
import Imageslider from './ImageSlider'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
  };
  render() {
    return (
      <View style={styles.container}>
      <Imageslider/>
  </View>
    );
  }
}
componentDidmount=()=>{
  BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
}

componentWillUnmount = () => {
  BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
};

handleBackButton = () => {
  // this.props.navigation.navigate('SomeScreen');
  return true;
};
const styles = StyleSheet.create({

});

export default App;
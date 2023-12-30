import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  Image
} from 'react-native-web'
import Icon from './assets/icon.jpg'

export default class App extends Component {
  render() { 
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>Welcome to react-native Hello world!</Text>
        <br/>
        <Image source={url: Icon} style={Styles.imageStyle} />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'green'
  },
  textStyle: {
    fontSize: 15,
    color: 'white'
  },
  imageStyle: {
    width: '100%'
  }
})
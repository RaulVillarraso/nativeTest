import React from 'react'
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native'

export const Landing = () => {

  const image = {uri: 'https://atolkienistperspective.files.wordpress.com/2017/06/middle-earth-map-banner.jpg'}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>
            Welcome to Middle Earth
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
          This app is made to test the posibilities of React Native and 
          learn how to use it. I'm going to use the API "The One API" due
          I'm a big fan of Middle Earth and The Lord of The Rings. I hope
          you enjoy how this app is made and feel free to send any evaluation
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14322B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    alignItems: 'center',
    width: '100%',
    height:'10%',
    margin:8,
    marginBottom:32,
  },
  image:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:25,
    width: '100%',
    height:'50%',
    color:'white',
    backgroundColor:'rgba(0,0,0,0.3)'

  },
  welcome: {
    width: '90%',
    height:'60%',
    backgroundColor:'#2C5A4A',
    borderRadius: 8,
    borderColor:'#AB8D5A',
    borderWidth: 3,
    padding: 16,
    justifyContent:'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    fontStyle:'italic',
    textAlign:'center',
    lineHeight: 30
  },  
})


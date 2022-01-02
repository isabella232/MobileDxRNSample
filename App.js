/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NativeModules, Platform, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { ChatForm } from './ChatForm.js';
import theme from './theme.style'

const { GenesysCloud } = NativeModules;

const orientation = Platform.OS ===  'android' ? GenesysCloud.getConstants().SCREEN_ORIENTATION_LOCKED : undefined

export default function App() {

  const onSubmit = (data) => {
    console.log(`got data = ${data}`)
    
    if(orientation != undefined) {
      GenesysCloud.requestScreenOrientation(orientation)
    }
    
    GenesysCloud.startChat(data.deploymentId, data.domain, data.tokenStoreKey, data.logging);

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row", justifyContent: 'center'}}>
      <Image style={{width:35, height:35,marginTop:5}} source={require('./img/genesys-logo-red-180.png')}/>
      <Text style={styles.title}>Genesys Chat</Text>
      </View>
      <Text style={styles.title_sub}>Fill the following parameters to start your chat</Text>
      <ChatForm onSubmit={onSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.mainBack,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15,
    marginRight:15,
  },
  title: {
    color: theme.genesysOrange,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginTop:20,
    marginBottom: 10
  },
  title_sub: {
    color :'#6b6968',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:10
  }
});

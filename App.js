/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatForm } from './ChatForm.js';
import  ChatButton  from './ChatButton';
// import { NativeModules } from 'react-native';

import GenDXChatModule from 'genesys-mobiledx-chat-rn-module';

export default function App() {


  const onSubmit = (data) => {
console.log(`got data = ${data}`)
    GenDXChatModule.startChatComponent(data.deploymentId, data.domain,
    data.tokenStoreKey, data.logging, data.email, data.phoneNumber, data.firstName, data.lastNAme);
    /*GenDXChatModule.startChatComponent("f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f", "inindca.com",
    "com.genesys.messenger.poc", true, "tehila.rozin@genesys.com", "666-666-66", "Fame", "RO");*/
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genesys Chat</Text>

      <Text style={styles.title_sub}>Fill the following parameters to start your chat</Text>
      
      <ChatButton onPress={onSubmit}/>
      
      <ChatForm onSubmit={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e303c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15,
  },
  title: {
    color :'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 10
  },
  title_sub: {
    color :'#ffeeaa',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:10
  }
});

import React, { useState, useEffect } from 'react';
import {  Button } from 'react-native';

// import GenDXChatModule from 'genesys-mobiledx-chat-rn-module';


const ChatButton = (props) => {
  // const onPress = () => {

  //   GenDXChatModule.startChatComponent("f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f", "inindca.com",
  //   "com.genesys.messenger.poc", true, "tehila.rozin@genesys.com", "666-666-66", "Fame", "RO");
  // }

  return (
    <Button
      title="Click to invoke your chat!"
      color="#841584"
      onPress={()=>props.onPress({deploymentId:"f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f", domain:"inindca.com",
        tokenStoreKey:"com.genesys.messenger.poc", logging:true, email:"tehila.rozin@genesys.com", phoneNumber:"666-666-66", firstName:"Fame", lastName:"RO"})}
    />
  );
};

export default ChatButton;

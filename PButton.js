
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save', style } = props;

  

  return (
    <Pressable style={{...style, ...styles.button}} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff9900',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
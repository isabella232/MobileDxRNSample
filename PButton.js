
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import theme from './theme.style'

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
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.genesysOrange,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
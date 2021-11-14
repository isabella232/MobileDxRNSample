
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import theme from './theme.style'

export const FormInputField = (props) => {
    
  //console.log(`props.errors?: ${props.errors}`)

  return (
    <View style={props.style.field}>
      
      <Text style={props.style.label}>{props.title}</Text>
      
      <Controller
        control={props.control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={{
              ...props.style.input,
              ...(props.error && {
                borderColor: 'red'
              })
            }}
            onBlur={ onBlur }
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={props.name}
        rules={{ required: props.required }}
      />

      {props.required && <Text style={{ color: theme.genesysOrange }}>* required</Text>}
    
    </View>
  );
ß}

FormInputField.defaultProps = { 
  required: true
} 
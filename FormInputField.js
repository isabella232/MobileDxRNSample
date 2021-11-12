
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

export const FormInputField = (props) => {

    
  FormInputField.defaultProps = { 
    required: true
  } 
  
  console.log(`props.errors?: ${props.errors}`)

  return (
    <View>
      <Text style={props.style.label}>{props.title}</Text>
      
      <Controller
        control={props.control}
        
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={{
              ...props.style.input,
              ...(props.error && {
                borderColor: '#ff0000'
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

      {props.required && <Text style={{ color: "orange" }}>* required</Text>}
    
    </View>
  );
ß}
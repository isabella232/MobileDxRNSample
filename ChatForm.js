import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
import { Controller, useForm } from 'react-hook-form'; //https://react-hook-form.com/get-started/#ReactNative
import Constants from 'expo-constants';

import { FormInputField } from './FormInputField';
import Button from './PButton';
//import { onChange } from 'react-native-reanimated';
// import { ScrollView } from 'react-native-gesture-handler';

export const ChatForm = (props) => {
    
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // const toggle = React.useCallback(() => setToggleCheckBox(!toggleCheckBox));

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            deploymentId:'f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f',
            domain:'inindca.com',
            tokenStoreKey:'com.genesys.messenger.poc',
            email:'',
            firstName: 'Test',
            lastName: 'Alpha',
            phoneNumber:'111-111-111-1',
            logging: false
        }
    });
    
    const onSubmit = data => {
        console.log(data);

        props.onSubmit(data)   

    };
    
    
    console.log('errors', errors);
    
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        
        <FormInputField 
        style={{...styles, marginTop:0}} title="Deployment Id" name="deploymentId" 
        error={errors.deploymentId} control={control}/>
        
        <FormInputField style={styles} title="Domain" name="domain" 
        error={errors.domain} control={control}/>
        
        <FormInputField style={styles} title="Token Store Key" name="tokenStoreKey" 
        error={errors.tokenStoreKey} control={control} />
        
        <FormInputField style={styles} title="Email" name="email" 
        error={errors.email} control={control} required={false}/>

        <FormInputField style={styles} title="First Name" name="firstName" 
        error={errors.firstName} control={control} required={false}/>
        
        <FormInputField style={styles} title="Last Name" name="lastName" 
        error={errors.lastName} control={control} required={false}/>
        
        <FormInputField style={styles} title="Phone Number" name="phoneNumber" 
        error={errors.phoneNumber} control={control} required={false}  />
        
        <View style={styles.row_container_2}>
        
        <Controller
        control={control}
        
        render={({field: { onChange, onBlur, value }}) => (
        <View style={styles.row_container_2}>
        <CheckBox style={styles.checkbox}
        title="Logging"
        disabled={false}
        //value={toggleCheckBox}
        checkBoxColor= 'orange' 
        checkedCheckBoxColor = 'white'
        onChange = {onChange}
        onClick={()=>{
            value = !value
           onChange(value)
            console.log(`value = ${value}`);
          }}
          onBlur = {onBlur}
        isChecked={value}
        value = {value}
        //onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{paddingBottom:4,marginLeft:10, ...styles.label}}>Enable Logging</Text>
        </View>
        )}
        name="logging"
        
        
        />

        </View>
        
        <View style={styles.row_container}>
        <Button
        style={{marginLeft: 10}}
        color
        title="Clear"
        onPress={() => {
            reset({
                deploymentId:'',
                domain:'',
                tokenStoreKey:'',
                firstName: '',
                lastName: '',
                phoneNumber:'',
                logging:false
            })
        }}
        />
        
        <Button
        style={{marginRight: 10}}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        />
        </View>
        </ScrollView>
        </SafeAreaView>
        );
    };
    
    const styles = StyleSheet.create({
        label: {
            color: 'white',
            marginTop: 16,
            marginBottom: 16,
            width:'100%',
        },
        row_container_2: {
            flex: 2,
            flexDirection: "row",
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            alignItems:'baseline',
            backgroundColor: '#2e303c',
            marginTop:10,
        },
        row_container: {
            flex: 1,
            flexDirection: "row",
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            paddingTop: Constants.statusBarHeight,
            padding: 15,
            backgroundColor: '#2e303c',
            marginTop:4
        },
        container: {
            flex: 1,
            flexDirection: "column",
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            padding: 15,
            backgroundColor: '#2e303c',
        },
        input: {
            backgroundColor: 'white',
            height: 34,
            padding: 5,
            borderRadius: 4,
        },
        checkbox: {
            
            color:'white',
            borderColor: 'white',
            
            marginTop: 0,
            
            borderRadius:4,
        }
    });
    
    
    /*

    <Text style={styles.label}>Deployment Id</Text>
        <Controller
      control={control}
      name="deploymentId1"
      render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
          />
      )}
      rules={{ required: true }}
  />
{errors?.deploymentId1?.type === 'required' && <Text style={{ color: "red" }}>First name is required</Text>}

    
    <Text style={styles.label}>Deployment Id</Text>
    <Controller
    control={control}
    
    render={({field: { onChange, onBlur, value }}) => (
        <TextInput
        placeholder="shit on your pants"
        style={styles.input}
        onBlur={onBlur}
        onChangeText={value => onChange(value)}
        value={value}
        />
        )}
        name="deploymentId"
        rules={{ required: true }}
        />
        {errors.deploymentId && <Text>This is required.</Text>}
        
        
        <Text style={styles.label}>Last name</Text>
        <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
            <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            />
            )}
            name="lastName"
            rules={{ required: true }}
            />
            
            */

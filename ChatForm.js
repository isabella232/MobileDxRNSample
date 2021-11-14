import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Controller, useForm } from 'react-hook-form'; //https://react-hook-form.com/get-started/#ReactNative
import { FormInputField } from './FormInputField';
import Button from './PButton';
import theme from './theme.style'

export const ChatForm = (props) => {
    
    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            deploymentId:'f8aad9d7-f8e7-48e9-ab02-eef92bc4fd2f',
            domain:'inindca.com',
            tokenStoreKey:'com.genesys.messenger.poc',
            email:'',
            firstName: '',
            lastName: '',
            phoneNumber:'',
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
        
        <ScrollView >
        
        <FormInputField 
        style={styles} title="Deployment Id" name="deploymentId" 
        error={errors.deploymentId} control={control}/>
        
        <FormInputField style={styles} title="Domain" name="domain" 
        error={errors.domain} control={control}/>
        
        <FormInputField style={styles} title="Token Store Key" name="tokenStoreKey" 
        error={errors.tokenStoreKey} control={control} />
        
        <FormInputField style={{field:{display:'none'}, ...styles}} title="Email" name="email" 
        error={errors.email} control={control} required={false}/>

        <FormInputField style={{field:{display:'none'}, ...styles}} title="First Name" name="firstName" 
        error={errors.firstName} control={control} required={false}/>
        
        <FormInputField style={{field:{display:'none'}, ...styles}} title="Last Name" name="lastName" 
        error={errors.lastName} control={control} required={false}/>
        
        <FormInputField style={{field:{display:'none'}, ...styles}} title="Phone Number" name="phoneNumber" 
        error={errors.phoneNumber} control={control} required={false}  />
        
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
                <View style={styles.row_container_2}>
                    <CheckBox style={styles.checkbox}
                        rightText="Enable logging"
                        
                        checkBoxColor= 'black' 
                        checkedCheckBoxColor = {theme.genesysOrange}
                        onChange = {onChange}
                        onClick={()=>{
                            value = !value
                            onChange(value)
                            console.log(`value = ${value}`);
                            }}
                            onBlur = {onBlur}
                        isChecked={value}
                        value = {value}
                    />
                </View>
            )}
            name="logging"
        />
    </ScrollView>

    <View style={styles.row_container}>
        <Button
        style={{marginLeft: 10,...styles.button}}
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
        style={{marginRight: 10, ...styles.button}}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        />
        </View>
     
        </SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        
        label: {
            color: theme.textColor,
            marginTop: 16,
            marginBottom: 8,
            width:'100%',
        },
        checkbox_container: {
            flex: 1,
            flexDirection: "row",
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            alignItems:'baseline',
            backgroundColor: theme.mainBack,
            marginTop:8,
        },
        row_container: {
            flexDirection: "row",
            justifyContent: 'space-around',
            padding: 15,
            backgroundColor: theme.mainBack,
            marginTop: 6
        },
        container: {
            display: 'flex',
            flex: 1,
            flexDirection: "column",
            alignSelf:'stretch',
            padding: 15,
            backgroundColor: theme.mainBack,
        },
        input: {
            backgroundColor: '#dddddd',
            height: 36,
            borderColor:'#dddddd',
            borderWidth:1,
            padding: 8,
            borderRadius: 4,
        },
        checkbox: {
            marginTop: 20,
            borderRadius:4,
        }, 
        button: {
            height: 45,
            justifyContent:'space-evenly',
            alignSelf: 'flex-end'
        },
        
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

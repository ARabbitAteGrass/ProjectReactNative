import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, TextInput } from 'react-native'


const Practice1 = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');

    const checkBlank = ()=>{
        if(!name.trim()){
            alert('Please enter name')
            return;
        }
        if(!mail.trim()){
            alert('Please enter mail')
            return;
        }
        alert('Success')
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter Name "
                    onChangeText={name=>{(setName(name))}}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter Email "
                    onChangeText={mail=>{(setMail(mail))}}
                />
                <View style={{marginTop:15}}>
                    <Button
                        onPress={checkBlank}
                        title="Click Me"
                        color="#123456"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
    },
  });

export default Practice1;

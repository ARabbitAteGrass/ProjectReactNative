import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'

const TouchablePractice = () => {
    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');

    const report = ()=>{
        alert("Email : "+mail+"\nPassword : "+pass)
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Email"
                    onChangeText={mail=>{(setMail(mail))}}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Password"
                    onChangeText={pass=>{(setPass(pass))}}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    activeOpacity = {0.5}
                    onPress={report}
                    >
                    <Text style={styles.buttonTextStyle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice

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
      borderColor: '#00aea1',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00aea1',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
});

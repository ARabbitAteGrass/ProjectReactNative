import React from 'react';
import { useState, useMemo } from 'react';

import {
  View, 
  Text, 
  StyleSheet, 
  Button, 
  SafeAreaView,
  TextInput
} from 'react-native';



const App = () => {
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumberOrNot = () => {
    if (isNaN(inputValue)) {
      alert('It is not a number');
    }else{
      alert('It is number');
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Text"
          style={styles.textInputStyle}
          onChangeText={inputValue => setInputValue(inputValue)}
        />
        <Button title="Submit" color="#606070" onPress={checkValueIsNumberOrNot} />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  marginTop:60
  },
  scrollView: {
  flex: 1,
  backgroundColor: 'pink',
  alignItems: 'center',
  justifyContent: 'center',
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  },
  TextInputStyle:{
    textAlign:'center',
    height:50,
    width:'70%',
    marginBottom:10,
    borderColor:'black'
  }
});

export default App;
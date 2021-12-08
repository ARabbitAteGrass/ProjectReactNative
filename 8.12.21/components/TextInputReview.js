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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{inputValue}</Text>
        <TextInput
          style={styles.input}
          placeholder="Text : "
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});

export default App;
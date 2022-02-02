import React from 'react';
import { View, Text,Button,SafeAreaView,TouchableOpacity } from 'react-native';

import {styles} from '../components/styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,padding:15}}>
        <View style={styles.container}>
          <Text style = {styles.textTopStyle}>
            Home Screen
          </Text>
          <TouchableOpacity 
                    style={styles.buttonStyle}
                    activeOpacity = {0.5}
                    onPress={() => {
                      navigation.navigate('Setting');
                    }}
                    >
                    <Text style={styles.buttonTextStyle}>Go to setting tab</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                    style={styles.buttonStyle}
                    activeOpacity = {0.5}
                    onPress={() => {
                      alert('coming soon')
                    }}
                    >
                    <Text style={styles.buttonTextStyle}>Go to news screen</Text>
          </TouchableOpacity>
        </View>
        <Text style = {styles.textBottomStyle}>
            www.tni.ac.th
        </Text>
      </View>
    </SafeAreaView>
    
  );
};

export default HomeScreen;
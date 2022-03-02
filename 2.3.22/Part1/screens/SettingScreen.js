import React from 'react';
import { View, Text,Button,SafeAreaView,TouchableOpacity } from 'react-native';

import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
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
                      navigation.navigate('Home');
                    }}
                    >
                    <Text style={styles.buttonTextStyle}>Go to home tab</Text>
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
          <TouchableOpacity 
                    style={styles.buttonStyle}
                    activeOpacity = {0.5}
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}
                    >
                    <Text style={styles.buttonTextStyle}>Go to profile screen</Text>
          </TouchableOpacity>
        </View>
        <Text style = {styles.textBottomStyle}>
            www.tni.ac.th
        </Text>
      </View>
    </SafeAreaView>
    
  );
};

export default SettingScreen;
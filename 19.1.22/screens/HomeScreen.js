import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="home" size={50} color="skyblue" /> */}
      <Text>Main page</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {email: 'na.sanmook_st@tni.ac.th'})
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
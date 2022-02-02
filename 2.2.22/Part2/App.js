import {StyleSheet, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#fa8072'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#fa8072'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
      }}>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let srcimg;
            if (route.name === 'Home') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo2.png');
            } else if (route.name === 'Settings') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo3.png');
            }
            return <Image source={srcimg} style={{width: 20, height: 20}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Settings" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
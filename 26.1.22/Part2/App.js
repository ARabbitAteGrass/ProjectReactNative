import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        <Image
          source={require('D:/projectReact/assets/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
        headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'First Page'}}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
        headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{title: 'Second Page'}}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'Third Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#123456',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="FirstPage"
          component={firstScreenStack}
          options={{drawerLabel: 'First Page Option'}}
        />
        <Drawer.Screen
          name="SecondPage"
          component={secondScreenStack}
          options={{drawerLabel: 'Second Page Option'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
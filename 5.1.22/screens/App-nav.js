import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF69B4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="First"
          component={FirstPage}
          options={{ title: 'FirstPage' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondPage}
          options={{ title: 'SecondPage' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
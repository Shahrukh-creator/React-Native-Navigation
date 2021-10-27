import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';

const Stack = createNativeStackNavigator();

export default class StackNavigator {
  render()
  {
  return (
      <Stack.Navigator initialRouteName="HomeScreen" 
      screenOptions={{
      headerShown: false
  }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileScreen1" component={ProfileScreen1} />

      </Stack.Navigator>
  );
  }
}

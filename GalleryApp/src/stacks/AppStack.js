import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { InfoScreen } from '../screens/InfoScreen'
import { ViewScreen } from '../screens/ViewScreen'

const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Info' component={InfoScreen} />
        <Stack.Screen name='View' component={ViewScreen} />
      </Stack.Navigator>
  )
}

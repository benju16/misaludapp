import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import TopMisaludapp from '../screens/TopMisaludapp'

const Stack = createStackNavigator()


export default function TopMisaludappStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen
             name="top-misaludapp"
             component={TopMisaludapp}
             options={{ title: "Los mejores centros Medicos"}}
          />
      </Stack.Navigator>
    )
}

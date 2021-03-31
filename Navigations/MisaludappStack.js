import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Misaludapp from '../screens/Misaludapp'

const Stack = createStackNavigator()


export default function MisaludappStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen
             name="misaludapp"
             component={Misaludapp}
             options={{ title: "Mi salud app"}}
          />
      </Stack.Navigator>
    )
}

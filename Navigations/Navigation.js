import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import MisaludappStack from './MisaludappStack'
import FavoritesStack from './FavoritesStack'
import TopMisaludappStack from './TopMisaludappStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
              <Tab.Navigator>
                 <Tab.Screen
                   name="misaludapp"
                   component={MisaludappStack}
                   options={{ title: "Misaludapp"}}
                 />
                 <Tab.Screen
                   name="favorites"
                   component={FavoritesStack}
                   options={{ title: "Favoritos"}}
                 />
                 <Tab.Screen
                   name="top-misaludapp"
                   component={TopMisaludappStack}
                   options={{ title: "Top 5"}}
                 />
                 <Tab.Screen
                   name="search"
                   component={SearchStack}
                   options={{ title: "Buscar"}}
                 />
                 <Tab.Screen
                   name="account"
                   component={AccountStack}
                   options={{ title: "Cuenta"}}
                 />
              </Tab.Navigator>
        </NavigationContainer>

        
    )
}

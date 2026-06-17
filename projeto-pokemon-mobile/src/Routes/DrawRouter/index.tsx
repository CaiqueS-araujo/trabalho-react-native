import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Main } from '../../Pages/Main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <Drawer.Navigator>
        <Drawer.Screen name='Main' component={Main} />
    </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}
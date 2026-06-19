import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { PokemonList } from '../../Pages/PokemonList';
import { Quiz } from '../../Pages/Quiz';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Games } from '../../Pages/Games';
import { Curiosidades } from '../../Pages/Curiosidades'

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

  return (

    <GestureHandlerRootView style={{flex: 1}}>
    <Drawer.Navigator>
        <Drawer.Screen name='PokemonList' component={PokemonList} />
        <Drawer.Screen name='Quiz' component={Quiz} options={{ title: 'Quiz Pokémon' }} />
        <Drawer.Screen name='Games' component={Games} options={{ title: 'Jogos Clássicos' }} />
        <Drawer.Screen name ='Curiosidades' component={Curiosidades} options={{title: 'Curiosidades Pokémon'}} />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}
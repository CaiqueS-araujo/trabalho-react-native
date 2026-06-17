import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Orbitron_400Regular, useFonts } from '@expo-google-fonts/orbitron';
import Card from '../../components/Card';
import PokemonsListCard from '../../components/PokemonsListCard';


const pokemon = {
  image: '',
  title: 'jorgin',
  subtitle: 'jorgin2'
}

export function Main() {

   const [fontsLoaded] = useFonts({Orbitron_400Regular});

    const navigation = useNavigation();

    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>  
          <Text style={styles.Titulo}>LISTA DE POKÉMONS!</Text>
        </View>

        <View>
          <Card pokemon={pokemon}/>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header:{
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
  }, 
  container: {
    flex: 1,
  },
  Titulo:{
     fontFamily:'Orbitron_400Regular',
     fontSize: 32,
  }
})
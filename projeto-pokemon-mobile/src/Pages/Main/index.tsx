import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Orbitron_400Regular, useFonts } from '@expo-google-fonts/orbitron';
import PokemonsListCard from '../../components/PokemonsListCard';


export function Main() {

   const [fontsLoaded] = useFonts({Orbitron_400Regular});

    const navigation = useNavigation();

    if (!fontsLoaded) {
      return null;
    }

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.header}>  
          <Text style={styles.Titulo}>LISTA DE POKÉMONS!</Text>
        </View>

        <View>
          <PokemonsListCard />
        </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  header:{
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom:90,
  }, 
  container: {
    flex: 1,
  },
  Titulo:{
     fontFamily:'Orbitron_400Regular',
     fontSize: 32,
  }
})
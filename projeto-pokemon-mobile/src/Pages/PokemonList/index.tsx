import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Bangers_400Regular } from '@expo-google-fonts/bangers';
import PokemonsListCard from '../../components/PokemonsListCard';
import { useFonts } from '@expo-google-fonts/bangers';
import { LinearGradient } from 'expo-linear-gradient';

export function PokemonList() {

   const [fontsLoaded] = useFonts({Bangers_400Regular});

    const navigation = useNavigation();

    if (!fontsLoaded) {
      return null;
    }

  return (
    <ScrollView>
   <LinearGradient colors={['#FFDE00', '#3B4CCA']}>
    <View style={styles.container}>
        <View style={styles.header}>  
          <Text style={styles.Titulo}>LISTA DE POKÉMONS!</Text>
        </View>

        <View>
          <PokemonsListCard />
        </View>
    </View>
    </LinearGradient>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  header:{
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 36,
      marginBottom:90,
  }, 
  container: {
    flex: 1,
    
  },
  Titulo:{
     fontFamily:'Bangers_400Regular',
     fontSize: 50,
     color: '#c00404',
     textShadowColor: '#000000',
     textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
})
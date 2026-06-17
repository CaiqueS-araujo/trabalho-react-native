import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { Orbitron_400Regular, useFonts } from '@expo-google-fonts/orbitron';
import { Fredoka_400Regular } from '@expo-google-fonts/fredoka';
import React from 'react';

type CardElements = {
  pokemon: {
    image : string;
    title : string;
    subtitle : string;
  };
};

export default function Card({ pokemon }: CardElements) {

    const [loadedFonts] = useFonts({

        Fredoka_400Regular,
        Orbitron_400Regular
    })

    if(!loadedFonts)
        return null;

  return (
    <View style={styles.containerCard}>
      <Image
        source={{
          uri: pokemon.image,
        }}
        style={styles.image}
        alt='Imagens Pokémons'
      />

      <Text style= {styles.title}>{pokemon.title}</Text>
      <Text style= {styles.subTitle}>{pokemon.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#a10606',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,

    // Android
    ...(Platform.OS === 'android' && {
      elevation: 10,
    }),

    // iOS
    ...(Platform.OS === 'ios' && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    }),

    // Web
    ...(Platform.OS === 'web' && {
      boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.3)',
    }),
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  title: {
    fontFamily: 'Orbitron_400Regular',
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
  },

  subTitle: {
    fontFamily: 'Fredoka_400Regular',
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
  },
});

import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../Card';
import * as images from '../../../assets/index';

export default function PokemonsListCard() {

    type PokemonCard = {
        image: ImageSourcePropType,
        title: string,
        subtitle: string,
    }

    const [StaticPokemons, setStaticPokemons] = useState<PokemonCard[]>(
[
    {   
        image: images.Bulbasaur, 
        title: 'Bulbasaur', 
        subtitle: 'Element: Grass'
    },

    {   
        image: images.Butterfree, 
        title: 'Butterfree', 
        subtitle: 'Element: Bug, Flying'
    },

    {   
        image: images.Caterpie, 
        title: 'Caterpie', 
        subtitle: 'Element: Bug'
    },

    {   
        image: images.Charizard, 
        title: 'Charizard', 
        subtitle: 'Element: Fire, Flying'
    },

    {   
        image: images.Metapod, 
        title: 'Metapod', 
        subtitle: 'Element: Bug'
    },

    {   
        image: images.Squirtle, 
        title: 'Squirtle', 
        subtitle: 'Element: Water'
    },

]);

    const [PokemonsDynamicList, setPokemonsDynamicList] = useState<PokemonCard[]>([]);

   useEffect(() => {
    setPokemonsDynamicList(
        StaticPokemons.map((element, key) => {
            return {
                title: element.title,
                subtitle: element.subtitle,
                image: element.image,
            };
        })
    );
}, []);

  return (
    <View style={styles.ListCard}>
    {PokemonsDynamicList.map
    (
        (obj,key) => (
            <Card key={key}pokemon={obj} />
        )
    )
    }
    </View>
  )
}

const styles = StyleSheet.create({
ListCard: {
    
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 40,
    flexWrap: 'wrap',
    justifyContent: 'center',
},
})
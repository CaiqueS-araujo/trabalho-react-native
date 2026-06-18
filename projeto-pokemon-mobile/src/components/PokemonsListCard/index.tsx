import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../Card';

export default function PokemonsListCard() {

    type PokemonCard = {
        image: string,
        title: string,
        subtitle: string,
    }

    const [StaticPokemons, setStaticPokemons] = useState<PokemonCard[]>(
[
    {   
        image: '', 
        title: 'titulo1', 
        subtitle: 'subtitulo1'
    },

    {   
        image: '', 
        title: 'titulo2', 
        subtitle: 'subtitulo2'
    },

    {   
        image: '', 
        title: 'titulo3', 
        subtitle: 'subtitulo3'
    },

    {   
        image: '', 
        title: 'titulo4', 
        subtitle: 'subtitulo4'
    },

    {   
        image: '', 
        title: 'titulo5', 
        subtitle: 'subtitulo5'
    },

    {   
        image: '', 
        title: 'titulo6', 
        subtitle: 'subtitulo6'
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
    gap: 250,
    flexWrap: 'wrap',
    justifyContent: 'center',
},
})
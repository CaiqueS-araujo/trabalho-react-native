import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function PokemonsListCard() {

    const [StaticPokemons, setStaticPokemons] = useState([
        {
            imagem: '',
            titulo: 'exmplo1',
            subtitulo: 'exemplo1',
        },{
            imagem: '',
            titulo: 'exemplo2',
            subtitulo: 'exemplo2',
        },{
            imagem: '',
            titulo: 'exemplo3',
            subtitulo: 'exemplo3',
        },{
            imagem: '',
            titulo: 'exemplo4',
            subtitulo: 'exemplo4',
        },{
            imagem: '',
            titulo: 'exemplo5',
            subtitulo: 'exemplo5',
        },{
            imagem: '',
            titulo: 'exemplo6',
            subtitulo: 'exemplo6',
        },
    ]);

    const [PokemonsDynamicList, setPokemonsDynamicList] = useState([]);

   useEffect(() => {
    setPokemonsDynamicList(
        StaticPokemons.map((element) => {
            return {
                titulo: element.titulo,
                subtitulo: element.subtitulo,
                imagem: element.imagem,
            };
        })
    );
}, []);

  return (
    <ScrollView>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
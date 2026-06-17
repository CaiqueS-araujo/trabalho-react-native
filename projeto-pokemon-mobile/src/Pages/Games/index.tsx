import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Orbitron_400Regular, useFonts } from '@expo-google-fonts/orbitron';
import GameCard from '../../components/GameCard';

// Base de dados local

const GAMES_DATA = [
    {
        id: '1',
        console: 'Game Boy',
        gameA: 'Pokémon Red Version',
        gameB: 'Pokémon Blue Version',
        coverA: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ruby.png',
        coverB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sapphire.png',
    },
    {
        id: '2',
        console: 'Game Boy Advance',
        gameA: 'Pokémon Ruby Version',
        gameB: 'Pokémon Sapphire Version',
        coverA: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ruby.png',
        coverB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sapphire.png',
    },
];

export function Games() {
    const [fontsLoaded] = useFonts({ Orbitron_400Regular });
    const [searchText, setSearchText] = useState('');
    const [filteredGames, setFilteredGames] = useState(GAMES_DATA);

    // Filtra a lista quando digita

    useEffect(() => {
        if (searchText === '') {
            setFilteredGames(GAMES_DATA);
        } else {
            const filtered = GAMES_DATA.filter((game) =>
                game.gameA.toLowerCase().includes(searchText.toLowerCase()) ||
                game.console.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        }
    }, [searchText]);

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>JOGOS CLÁSSICOS</Text>
            </View>

            <View style={styles.content}>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar jogo ou console"
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <FlatList
                    data={filteredGames}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <GameCard
                            consoleName={item.console}
                            gameA={item.gameA}
                            gameB={item.gameB}
                            coverA={item.coverA}
                            coverB={item.coverB}
                        />
                        
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A75BB',
        borderBottomWidth: 3,
        borderBottomColor: '#ffcb05',
    },
    titulo: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 24,
        color: '#fff',
        marginTop: 20,
    },
    content: {
        flex: 0.85,
        padding: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
    }

});










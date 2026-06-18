import { View, StyleSheet, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { Orbitron_400Regular, useFonts } from '@expo-google-fonts/orbitron';
import { Fredoka_400Regular } from '@expo-google-fonts/fredoka';
import React, { useState } from 'react';

type GameCardProps = {
    consoleName: string;
    gameA: string;
    gameB: string;
    coverA: string;
    coverB: string;
};

export default function Card({ consoleName, gameA, gameB, coverA, coverB }: GameCardProps) {
    const [loadedFonts] = useFonts({
        Fredoka_400Regular,
        Orbitron_400Regular,
    });

    // useState para controlar a versão do jogo

    const [showVersionA, setShowVersionA] = useState(true);

    if (!loadedFonts) return null;

    return (

        // O Touchable vai substituir a view principal para permitir o clique

        <TouchableOpacity
            style={styles.containerCard}
            activeOpacity={0.8}
            onPress={() => setShowVersionA(!showVersionA)} // Quando clica, alterna a versão
        >
            <Text style={styles.consoleTag}>{consoleName}</Text>

            <Image
                source={{
                    uri: showVersionA ? coverA : coverB,
                }}
                style={styles.image}
                alt='Capa do Jogo'
            />

            <Text style={styles.title}>{showVersionA ? gameA : gameB}</Text>
            <Text style={styles.subTitle}>(Toque para trocar a versão)</Text>
        </TouchableOpacity>
    );
}

// Muito chato fazer estilo :(

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#333',

        ...(Platform.OS === 'android' && { elevation: 5 }),
        ...(Platform.OS === 'ios' && {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
        }),
    },
    consoleTag: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 12,
        color: '#ffcb05',
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Orbitron_400Regular',
        marginTop: 15,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    subTitle: {
        fontFamily: 'Fredoka_400Regular',
        marginTop: 5,
        fontSize: 12,
        color: '#aaa',
    },

});





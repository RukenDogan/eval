import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ count }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Ruu</Text>
            <Text style={styles.videoGame}>Nombre de jeux vidéos : {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        padding: 36,

    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    videoGame: {
        fontSize: 20,
        fontWeight: 'bold'
    },

});

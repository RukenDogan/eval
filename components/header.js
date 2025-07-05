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
        padding: 20,
        borderWidth: 1,
        borderColor: '#f9cb9c',
        borderRadius: 8,
        backgroundColor: '#fce5cd',
        // marginLeft: 20,
        // marginRight: 20,

    },

    name: {
        fontSize: 20,
        // fontWeight: 'bold',
    },

    videoGame: {
        fontSize: 20,
        // fontWeight: 'bold'
    },

});

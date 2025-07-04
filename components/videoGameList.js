import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import VideoGame from './dataVideoGames';

export default function VideoGameList({ data }) {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.titre}</Text>
            <Text style={styles.price}>{item.prix} €</Text>
            <Text style={styles.genre}>{item.genre}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 8 }}
        />
    );
}

const styles = StyleSheet.create({

    card: {
        flex: 1,
        backgroundColor: '#f0b27a',
        borderRadius: 10,
        margin: 8,
        padding: 12,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

    price: {
        fontSize: 14,
        color: 'white'
    },

    genre: {
        fontSize: 12,
        color: 'black'
    },
});

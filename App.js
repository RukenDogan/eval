import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/header';
import VideoGameList from './components/videoGameList';
import VideoGames from './components/dataVideoGames';
import VideoGameDisplay from './components/videoGameDisplay';

export default function App() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const load = async () => {
      try {
        const data = VideoGames;
        setGames(data);
      } catch (err) {
        setError(err.message || 'Erreur inconnue');
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Chargement…</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={[styles.errorText]}>
          X {error}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header data={games}
        count={games.length} />
      <VideoGameList data={games} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  error: {
    color: 'red',
    fontSize: 18
  },

});

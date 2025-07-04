import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/header';
import VideoGameList from './components/videoGameList';
import VideoGames from './components/dataVideoGames';
import VideoGameDisplay from './components/videoGameDisplay';

export default function App() {
  const [games, setGames] = useState(videoGameList);
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
      <Header count={games.length} />
      <VideoGameList data={videoGameList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
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



const videoGameList =
[
  {
    "id": 1,
    "titre": "The Last of Us Part II",
    "prix": 25,
    "genre": "Action-Aventure"
  },
  {
    "id": 2,
    "titre": "FIFA 23",
    "prix": 20,
    "genre": "Sport"
  },
  {
    "id": 3,
    "titre": "Call of Duty: Modern Warfare II",
    "prix": 30,
    "genre": "FPS"
  },
  {
    "id": 4,
    "titre": "Horizon Forbidden West",
    "prix": 28,
    "genre": "Action-RPG"
  },
  {
    "id": 5,
    "titre": "Mario Kart 8 Deluxe",
    "prix": 35,
    "genre": "Course"
  },
  {
    "id": 6,
    "titre": "Animal Crossing: New Horizons",
    "prix": 22,
    "genre": "Simulation"
  },
  {
    "id": 7,
    "titre": "Elden Ring",
    "prix": 32,
    "genre": "Action-RPG"
  },
  {
    "id": 8,
    "titre": "God of War Ragnarök",
    "prix": 40,
    "genre": "Action-Aventure"
  },
  {
    "id": 9,
    "titre": "Gran Turismo 7",
    "prix": 27,
    "genre": "Course"
  },
  {
    "id": 10,
    "titre": "Minecraft",
    "prix": 18,
    "genre": "Sandbox"
  },
  {
    "id": 11,
    "titre": "Fortnite",
    "prix": 0,
    "genre": "Battle Royale"
  },
  {
    "id": 12,
    "titre": "Red Dead Redemption 2",
    "prix": 23,
    "genre": "Action-Aventure"
  },
  {
    "id": 13,
    "titre": "Cyberpunk 2077",
    "prix": 15,
    "genre": "RPG"
  },
  {
    "id": 14,
    "titre": "Resident Evil Village",
    "prix": 19,
    "genre": "Horreur"
  },
  {
    "id": 15,
    "titre": "Assassin's Creed Valhalla",
    "prix": 21,
    "genre": "Action-Aventure"
  }
]
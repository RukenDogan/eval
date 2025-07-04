import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/header';
import VideoGameList from './components/videoGameList';
import VideoGames from './components/dataVideoGames';
import Dropdown from './components/dropdown';

// import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [games, setGames] = useState(DATA);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const [selected, setSelected] = useState(null);
  // const onSelect = (item) => {
  //   setSelected(item);
  // };

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
      <Header count={DATA.length} />
      <Text style={styles.filter}>Filtrer par :</Text>
      
      <Dropdown
      
        // data={DATA}
        // selectedItem={selected}
        // style={styles.dropdown}
        // itemStyle={styles.item}
        // textStyle={styles.text}
        // icon={<AntDesign name="down" size={20} color="black" />}
      />
      <VideoGameList data={DATA} />
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },

  filter: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },



  error: {
    color: 'red',
    fontSize: 18
  },

});


const DATA =
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

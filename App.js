import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/header';
import VideoGameList from './components/videoGameList';
import VideoGames from './components/dataVideoGames';
import Dropdown from './components/dropdown';


export default function App() {
  const [games, setGames] = useState(VideoGames); // liste des jeux vidéos
  const [error, setError] = useState(null); // erreur de chargement
  const [isLoading, setIsLoading] = useState(true); // chargement en cours
  const [selectedGenre, setSelectedGenre] = useState(null); // genre sélectionné

  const filteredGames = useMemo(() => {
    if (!selectedGenre)
      return games; // si aucun genre sélectionné, retourne tous les jeux
    return games.filter(game => game.genre === selectedGenre); // si un genre sélectionné, retourne les jeux correspondant au genre
  },
    [games, selectedGenre] // liste des jeux vidéos filtrés en fonction du genre sélectionné
  );


  useEffect(() => { // chargement des jeux vidéos
    const load = async () => { // fonction asynchrone
      try {
        const data = VideoGames; // récupère les jeux vidéos
        setGames(data); // met à jour la liste des jeux vidéos
      } catch (err) { // si une erreur est survenue
        setError(err.message || 'Erreur inconnue'); // affiche l'erreur
      } finally { // si tout se passe bien
        setIsLoading(false); // cache le chargement
      }
    };
    load(); // lance la fonction
  }, []); // exécute la fonction uniquement si le chargement est terminé

  if (isLoading) { // si le chargement est en cours
    return ( // affiche un texte
      <SafeAreaView style={styles.center}>
        <Text>Chargement…</Text>
      </SafeAreaView>
    );
  }

  if (error) { // si une erreur est survenue
    return ( // affiche un texte
      <SafeAreaView style={styles.center}>
        <Text style={[styles.errorText]}>
          X {error}
        </Text>
      </SafeAreaView>
    );
  }

  return ( // affiche le contenu
    <SafeAreaView style={styles.container}> *
      <Header count={games.length} />

      <View style={styles.row}>
        <Text style={styles.filter}>Filtrer par :</Text>
        <Dropdown value={selectedGenre} onSelect={setSelectedGenre} />
      </View>

      <VideoGameList data={filteredGames} />
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  filter: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
    marginRight: 50,
  },

  error: {
    color: 'red',
    fontSize: 18
  },

});


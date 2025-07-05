import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

import VideoGames from './dataVideoGames'; 


export default function DropdownComponent({ value, onSelect }) {
  const [isFocus, setIsFocus] = useState(false); // affiche ou cache le dropdown

  const genres = useMemo(() => { // génère les genres
    const uniqueGenres = [...new Set(VideoGames.map(item => item.genre))]; // récupère les genres uniques
    return [
      { label: 'Tous', value: null }, // ajoute un genre "Tous"
      ...uniqueGenres.map(genre => ({ // ajoute les genres uniques
        label: genre, 
        value: genre
      }))
    ];
}, []);

const renderLabel = () => { // affiche ou cache le label
  if (value || isFocus) { // si le dropdown est ouvert ou si on a sélectionné un genre
    return ( // affiche le label
      <Text style={[styles.label, isFocus && { color: 'orange' }]}>
        Genres
      </Text>
    );
  }
  return null; // cache le label
};

return ( // affiche le dropdown
  <View style={styles.container}>
    {renderLabel()}
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'orange' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={genres}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Genre' : '...'}
      searchPlaceholder="Rechercher..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        onSelect(item.value); // sélectionne le genre
        setIsFocus(false); // ferme le dropdown
      }}
    // renderLeftIcon={() => (
    //   <AntDesign
    //     style={styles.icon}
    //     color={isFocus ? 'orange' : 'black'}
    //     name="Safety"
    //     size={20}
    //   />
    // )}
    />
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 6,
  },

  dropdown: {
    height: 50,
    width: 180,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  placeholderStyle: {
    fontSize: 16,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});
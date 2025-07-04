 import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data =
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


  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Genres
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="genre"
          placeholder={!isFocus ? 'Selectionnez un genre' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
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
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
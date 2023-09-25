/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {backgroundColors} from '../services/colors';
import AddFavorite from '../components/organisms/AddFavorite';
import ViewTypesAndMoves from '../components/molecules/ViewTypesAndMoves';

const PokemonScreen = () => {
  const route = useRoute();
  const {pokemon} = route.params;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColors[pokemon.types[0].type.name],
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <AddFavorite pokemon={pokemon} />
      </View>
      <Image
        source={{uri: pokemon.imageUrl}}
        style={{
          width: 140,
          height: 140,
          alignSelf: 'center',
          position: 'relative',
        }}
      />
      <ViewTypesAndMoves pokemon={pokemon} />
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },

  container: {
    flex: 1,
  },
});

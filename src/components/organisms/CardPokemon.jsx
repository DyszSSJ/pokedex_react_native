import {StyleSheet, View} from 'react-native';
import React from 'react';

const CardPokemon = ({children, backgroundColors}) => {
  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: backgroundColors,
      }}>
      {children}
    </View>
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
});

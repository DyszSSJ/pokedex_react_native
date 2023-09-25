import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFavoritos} from '../context/FavoritosContext';

const ContadorScreen = () => {
  const {favoritos} = useFavoritos();
  return (
    <View>
      <Text style={styles.contador}>
        {favoritos.length} Pokemon{favoritos.length > 1 ? 's' : ''} Favorito
        {favoritos.length > 1 ? 's' : ''}
      </Text>
    </View>
  );
};

export default ContadorScreen;

const styles = StyleSheet.create({
  contador: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

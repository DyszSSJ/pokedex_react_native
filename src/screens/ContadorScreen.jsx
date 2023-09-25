import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFavoritos} from '../context/FavoritosContext';

const ContadorScreen = () => {
  const {favoritos} = useFavoritos();
  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{favoritos.length}</Text>
      <Text style={styles.contadorText}>
        Pokemon{favoritos.length > 1 ? 's' : ''} Favorito
        {favoritos.length > 1 ? 's' : ''}
      </Text>
    </View>
  );
};

export default ContadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  contador: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  contadorText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
});

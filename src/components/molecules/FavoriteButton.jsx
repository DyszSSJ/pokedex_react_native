/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoriteButton = ({isFavorite, handleToggleFavorite}) => {
  return (
    <TouchableOpacity
      style={styles.buttonFavorite}
      onPress={handleToggleFavorite}>
      {isFavorite ? (
        <Ionicons
          name={'heart-dislike-sharp'}
          size={20}
          color="#fff"
          style={{textAlign: 'center'}}
        />
      ) : (
        <AntDesign
          name={'heart'}
          size={20}
          color="#fff"
          style={{textAlign: 'center'}}
        />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
const styles = StyleSheet.create({
  buttonFavorite: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 50,
  },
});

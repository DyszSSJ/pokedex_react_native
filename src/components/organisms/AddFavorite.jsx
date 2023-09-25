/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useFavoritos} from '../../hooks/useFavoritos';
import FavoriteButton from '../molecules/FavoriteButton';
import {useToast} from '../../hooks/useToast';

const AddFavorite = ({pokemon}) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const {updateFavorites} = useFavoritos();
  const {showToast} = useToast();

  useEffect(() => {
    const checkIsFavorite = async () => {
      try {
        const currentFavorites = await AsyncStorage.getItem('favoritos');
        if (currentFavorites) {
          const favorites = JSON.parse(currentFavorites);
          const isAlreadyFavorite = favorites.some(
            fav => fav.id === pokemon.id,
          );
          setIsFavorite(isAlreadyFavorite);
        }
      } catch (error) {
        console.error('Error al verificar favoritos:', error);
      }
    };
    checkIsFavorite();
  }, [pokemon]);

  const handleToggleFavorite = async () => {
    try {
      let updatedFavorites;
      if (isFavorite) {
        const currentFavorites = await AsyncStorage.getItem('favoritos');
        if (currentFavorites) {
          const favorites = JSON.parse(currentFavorites);
          updatedFavorites = favorites.filter(fav => fav.id !== pokemon.id);
        }
      } else {
        const currentFavorites = await AsyncStorage.getItem('favoritos');
        updatedFavorites = currentFavorites ? JSON.parse(currentFavorites) : [];
        updatedFavorites.push(pokemon);
      }
      setIsFavorite(!isFavorite);
      updateFavorites(updatedFavorites);
      await AsyncStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
      navigation.navigate('PokemonScreen');
      // Poner si se agregó o quitó de favoritos
      showToast(
        'success',
        'success',
        isFavorite
          ? `${pokemon.name} se quitó de favoritos`
          : `${pokemon.name} se agregó a favoritos`,
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <FavoriteButton
      isFavorite={isFavorite}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
};

export default AddFavorite;

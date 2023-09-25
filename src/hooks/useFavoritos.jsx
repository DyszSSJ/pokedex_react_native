import {useContext} from 'react';
import FavoritosContext from '../context/FavoritosContext';

export const useFavoritos = () => {
  const {favoritos, updateFavorites} = useContext(FavoritosContext);
  return {favoritos, updateFavorites};
};

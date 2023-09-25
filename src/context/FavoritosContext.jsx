import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({children}) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavoritos(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    };

    loadFavorites();
  }, []);

  const updateFavorites = async newFavorites => {
    setFavoritos(newFavorites);
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error al guardar favoritos:', error);
    }
  };

  return (
    <FavoritosContext.Provider value={{favoritos, updateFavorites}}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContext;

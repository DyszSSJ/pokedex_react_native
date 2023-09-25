import {useState} from 'react';
import axios from 'axios';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemons = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      );
      const pokemonData = await Promise.all(
        response.data.results.map(async pokemon => {
          const pokemonDetailResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            imageUrl: pokemonDetailResponse.data.sprites.front_default,
            types: pokemonDetailResponse.data.types,
            moves: pokemonDetailResponse.data.moves.slice(-5),
            id: pokemonDetailResponse.data.id,
          };
        }),
      );
      setPokemons(pokemonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };
  return {
    pokemons,
    getPokemons,
    loading,
  };
};

export default Pokemons;

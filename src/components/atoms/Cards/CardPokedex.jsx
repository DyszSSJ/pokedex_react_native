/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {backgroundColors, colors} from '../../../services/colors';
import {width} from '../../../services/constants';
import Tag from '../../molecules/Tag';
import {useFavoritos} from '../../../context/FavoritosContext';
import CardPokemon from '../../organisms/CardPokemon';
import Pokemons from '../../../services/getPokemons';
import Loading from '../Loading';

const CardPokedex = () => {
  const navigation = useNavigation();
  const {favoritos} = useFavoritos();
  const {loading} = Pokemons();

  const renderItem = ({item}) => (
    <CardPokemon
      key={item.name}
      backgroundColors={backgroundColors[item.types[0].type.name]}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: backgroundColors[item.types[0].type.name],
        }}
        onPress={() => {
          navigation.navigate('DetallesPokemonScreen', {
            pokemon: item,
          });
        }}>
        <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
          <Text style={styles.id}>{'#' + ('000' + item.id).slice(-3)}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.row}>
            <Tag type={item.types[0].type.name} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {item.moves.map((move, index) => {
                if (index === 0 || index === item.moves.length - 1) {
                  return (
                    <View
                      key={index}
                      style={{
                        ...styles.tag,
                        backgroundColor: colors[item.types[0].type.name],
                      }}>
                      <Text style={styles.type}>{move.move.name}</Text>
                    </View>
                  );
                }
                return null;
              })}
            </View>
          </View>
        </View>
        <ImageBackground
          resizeMode="contain"
          source={require('../../../assets/images/Pokeball_card.png')}
          style={styles.imageBackground}>
          <View style={styles.imageContainer}>
            {item.imageUrl && (
              <Image source={{uri: item.imageUrl}} style={styles.image} />
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </CardPokemon>
  );
  return (
    <View
      style={{
        marginBottom: 80,
      }}>
      <Text style={styles.title}>
        {favoritos.length === 0
          ? 'No hay Pokemones Favoritos'
          : 'Mis Pokemones Favoritos'}
      </Text>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={favoritos}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={1}
          contentContainerStyle={{padding: 10}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          enableAutomaticScroll={true}
        />
      )}
    </View>
  );
};

export default CardPokedex;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textTransform: 'capitalize',
  },

  id: {
    fontSize: 17,
    color: 'black',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  imageContainer: {
    marginTop: -10,
    marginLeft: -10,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    objectFit: 'cover',
  },

  tag: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    margin: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },

  type: {
    fontSize: 14,
    color: 'white',
  },
});

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Pokemons from '../../../services/getPokemons';
import {useNavigation} from '@react-navigation/native';
import {backgroundColors} from '../../../services/colors';
import {width} from '../../../services/constants';
import Tag from '../../molecules/Tag';
import Loading from '../../atoms/Loading';
import CardPokemon from '../../organisms/CardPokemon';

const CardCatalogo = () => {
  const {pokemons, getPokemons, loading} = Pokemons();
  const navigation = useNavigation();

  useEffect(() => {
    getPokemons();
  }, []);

  const renderItem = ({item}) => (
    <CardPokemon
      key={item.name}
      backgroundColors={backgroundColors[item.types[0].type.name]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetallesPokemonScreen', {
            pokemon: item,
          });
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
          <Text style={styles.id}>{'#' + ('000' + item.id).slice(-3)}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.row}>
            <Tag type={item.types[0].type.name} />
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
    <View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={pokemons}
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

export default CardCatalogo;

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});

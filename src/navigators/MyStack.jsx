/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import CatalogoScreen from '../screens/CatalogoScreen';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/DetallesPokemonScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonScreen"
        component={PokedexScreen}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <View style={style.header}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CatalogoScreen')}
                style={style.iconButton}>
                <Text style={style.icon}>+</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CatalogoScreen"
        component={CatalogoScreen}
        options={{
          headerTitle: 'Catalogo de Pokemones',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetallesPokemonScreen"
        component={PokemonScreen}
        options={{
          headerTitle: 'Detalles de Pokemon',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;

const style = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -3,
  },

  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#013a63',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

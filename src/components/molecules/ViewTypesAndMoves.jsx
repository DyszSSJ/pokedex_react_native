import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../services/colors';

const ViewTypesAndMoves = ({pokemon}) => {
  return (
    <View style={styles.box}>
      <View>
        <Text
          style={{
            ...styles.moveTitle,
            color: colors[pokemon.types[0].type.name],
          }}>
          Types
        </Text>
        <View style={styles.boxTypes}>
          {pokemon.types.map((type, index) => (
            <View
              key={index}
              style={{
                ...styles.tag,
                backgroundColor: colors[type.type.name],
              }}>
              <Text style={styles.type}>{type.type.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View>
        <Text
          style={{
            ...styles.moveTitle,
            color: colors[pokemon.types[0].type.name],
          }}>
          Moves
        </Text>
        <View style={styles.boxStats}>
          {pokemon.moves.map((move, index) => (
            <View
              key={index}
              style={{
                ...styles.tag,
                backgroundColor: colors[pokemon.types[0].type.name],
              }}>
              <Text style={styles.type}>{move.move.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ViewTypesAndMoves;

const styles = StyleSheet.create({
  boxTypes: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  boxStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },

  box: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 30,
  },

  moveTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },

  tag: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },

  type: {
    fontSize: 16,
    color: '#fff',
  },
});

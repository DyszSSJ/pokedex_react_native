import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, textColor} from '../../services/colors';

const Tag = ({type}) => {
  return (
    <View style={{...styles.tag, backgroundColor: colors[type]}}>
      <Text style={styles.textType}>{type}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textType: {
    padding: 7,
    color: textColor.white,
    marginLeft: 2,
    textTransform: 'capitalize',
  },
});

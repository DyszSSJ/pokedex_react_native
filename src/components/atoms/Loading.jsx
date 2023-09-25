import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from '@react-native-material/core';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#184e77" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 150,
  },
});

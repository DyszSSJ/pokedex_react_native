/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, forwardRef} from 'react';
import {View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigators/MyTabs';
import {FavoritosProvider} from './src/context/FavoritosContext';
import Toast from 'react-native-toast-message';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View>
        <Image
          source={require('./src/assets/images/Cargando.gif')}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: 200,
            borderRadius: 100,
          }}
        />
      </View>
    );
  }

  return (
    <FavoritosProvider>
      <NavigationContainer>
        <MyTabs />
        <Toast forwardRef={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </FavoritosProvider>
  );
};

export default App;

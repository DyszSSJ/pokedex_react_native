/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FormPerfil from '../components/molecules/FormPerfil';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PerfilScreen = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
      enableAutomaticScroll={true}
      showsVerticalScrollIndicator={false}
      style={{flex: 1, padding: 20}}>
      <FormPerfil />
    </KeyboardAwareScrollView>
  );
};

export default PerfilScreen;

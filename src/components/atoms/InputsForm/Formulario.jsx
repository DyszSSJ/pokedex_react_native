/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import {useToast} from '../../../hooks/useToast';

const Formulario = () => {
  const [open, setOpen] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const {showToast} = useToast();

  useEffect(() => {
    AsyncStorage.getItem('profileImage')
      .then(uri => {
        if (uri) {
          setImageUri(uri);
        }
      })
      .catch(error => console.error('Error al recuperar la imagen', error));

    AsyncStorage.getItem('nombre')
      .then(value => {
        if (value) {
          setNombre(value);
        }
      })
      .catch(error => console.error('Error al recuperar el nombre', error));

    AsyncStorage.getItem('fechaNacimiento')
      .then(value => {
        if (value) {
          setFechaNacimiento(new Date(value));
        }
      })
      .catch(error =>
        console.error('Error al recuperar la fecha de nacimiento', error),
      );
  }, []);

  const imagePicker = () => {
    setLoading(true);
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };
    launchImageLibrary(options, response => {
      console.log('response image', response.assets[0].uri);
      if (response.assets[0].uri) {
        console.log('Ruta de la imagen:', response.assets[0].uri);
        setImageUri(response.assets[0].uri);
        AsyncStorage.setItem('profileImage', response.assets[0].uri)
          .then(() => console.log('Imagen guardada'))
          .catch(error => console.error('Error al guardar la imagen', error));
      }
    });
    setLoading(false);
  };

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', nombre);
      await AsyncStorage.setItem('fechaNacimiento', fechaNacimiento.toString());
      showToast('success', 'success', 'Se ha editado el perfil correctamente');
    } catch (error) {
      console.error('Error al guardar los datos', error);
    }
  };

  return (
    <View>
      <View style={styles.containerImage}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : imageUri ? (
          <Image source={{uri: imageUri}} style={styles.avatarImage} />
        ) : (
          <FontAwesome name="user-circle" size={100} color={'#000'} />
        )}
        <TouchableOpacity onPress={imagePicker}>
          <Text style={styles.textAvatar}>Cambiar foto</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={nombre}
          onChangeText={text => setNombre(text)}
        />
      </View>
      <View>
        <Text style={styles.label}>Fecha de nacimiento</Text>
        <View style={styles.textInput}>
          <Text
            onPress={() => setOpen(true)}
            style={{color: 'black', fontSize: 15, textAlign: 'left'}}>
            {fechaNacimiento.toString().substr(4, 12)}
          </Text>
        </View>
        <DatePicker
          modal
          open={open}
          date={fechaNacimiento}
          onConfirm={date => {
            setOpen(false);
            setFechaNacimiento(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            guardarDatos();
          }}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#cccccc',
    fontSize: 15,
    marginBottom: 20,
    marginTop: 5,
    color: 'black',
  },

  containerImage: {
    alignItems: 'center',
    marginBottom: 20,
  },

  textAvatar: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginVertical: 12,
  },

  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

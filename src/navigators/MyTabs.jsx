/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PerfilScreen from '../screens/PerfilScreen';
import ContadorScreen from '../screens/ContadorScreen';
import MyStack from './MyStack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Catalogo"
      screenOptions={{
        tabBarActiveTintColor: '#013a63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Contador"
        component={ContadorScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="sort-numeric-desc" size={20} color={color} />
          ),
          headerTitle: 'Contador',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Catalogo"
        component={MyStack}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="catching-pokemon" size={38} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerTitle: 'Perfil del Usuario',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle" size={23} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

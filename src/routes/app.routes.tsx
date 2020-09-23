import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Logo from '../assets/logo.png';

import List from '../pages/List/Index';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: '#EBEEF8' },
    }}
    initialRouteName="List"
  >
    <App.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: () => <Image source={Logo} />,
      }}
      name="List"
      component={List}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: () => <Image source={Logo} />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { marginLeft: 20 },
        headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
      }}
      name="Cart"
      component={Cart}
    />
  </App.Navigator>
);

export default Routes;

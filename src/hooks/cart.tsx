import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { View } from 'react-native';

interface IMovie {
  id: string;
  title: string;
  image: string;
  quantity: number;
}

const CartProvider: React.FC = () => <View />;

export default CartProvider;

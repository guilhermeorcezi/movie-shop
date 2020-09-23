import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();

  const totalItensInCart = useMemo(() => {
    // const total = products.reduce(
    //   (accumulator, product) => accumulator + product.quantity, 0
    // );
    // return total
  }, []);

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#FFF" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </CartButton>
    </Container>
  );
};

export default FloatingCart;

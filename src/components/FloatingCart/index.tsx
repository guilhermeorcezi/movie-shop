import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { Container, CartButton, CartButtonText } from './styles';

import { useCart } from '../../hooks/cart';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();
  const { movies } = useCart();

  const totalItensInCart = useMemo(() => {
    const total = movies.reduce(
      (accumulator, movie) => accumulator + movie.quantity,
      0,
    );
    return total;
  }, [movies]);

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

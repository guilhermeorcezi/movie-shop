import React, { useMemo, useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import {
  Container,
  MovieContainer,
  MovieList,
  Movie,
  MovieImage,
  MovieTitleContainer,
  MovieTitle,
  MoviePriceContainer,
  MovieSinglePrice,
  TotalContainer,
  MoviePrice,
  MovieQuantity,
  ActionContainer,
  ActionButton,
  TotalMoviesContainer,
  TotalMoviesText,
  SubtotalValue,
} from './styles';

interface IMovie {
  id: string;
  title: string;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const handleIncrement = useCallback((id: string): void => { }, []);

  const handleDecrement = useCallback((id: string): void => { }, []);

  const totalItensInCart = useMemo(() => { }, []);

  return (
    <Container>
      <MovieContainer>
        <MovieList
          data={movies}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }: { item: Movie }) => (
            <Movie>
              <MovieImage source={{ uri: item.image_url }} />

              <MovieTitleContainer>
                <MovieTitle>{item.title}</MovieTitle>

                <TotalContainer>
                  <MovieQuantity>{`${item.quantity}x`}</MovieQuantity>
                </TotalContainer>
                
              </MovieTitleContainer>

              <ActionContainer>
                <ActionButton onPress={() => handleIncrement(item.id)}>
                  <FeatherIcon name="plus" color="#E83F5B" size={16} />
                </ActionButton>
                <ActionButton onPress={() => handleDecrement(item.id)}>
                  <FeatherIcon name="minus" color="#E83F5B" size={16} />
                </ActionButton>
              </ActionContainer>
            </Movie>
          )}
        />
      </MovieContainer>
      <TotalMoviesContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalMoviesText>{`${totalItensInCart} itens`}</TotalMoviesText>
      </TotalMoviesContainer>
    </Container>
  );
};

export default Cart;

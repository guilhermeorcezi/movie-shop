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
  MovieQuantity,
  ActionContainer,
  ActionButton,
  TotalContainer,
  TotalMoviesContainer,
  TotalMoviesText,
} from './styles';

import { useCart } from '../../hooks/cart';

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { increment, decrement, movies } = useCart();

  const handleIncrement = useCallback(
    (id: string): void => {
      increment(id);
    },
    [increment],
  );

  const handleDecrement = useCallback(
    (id: string): void => {
      decrement(id);
    },
    [decrement],
  );

  const totalItensInCart = useMemo(() => {
    const total = movies.reduce(
      (accumulator, movie) => accumulator + movie.quantity,
      0,
    );

    return total;
  }, [movies]);

  return (
    <Container>
      <MovieContainer>
        <MovieList
          data={movies}
          keyExtractor={(item, index) => `list-item-${index}`}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }: { item: IMovie }) => (
            <Movie>
              <MovieImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`,
                }}
              />

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

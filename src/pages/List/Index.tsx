import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import {
  Container,
  MovieContainer,
  MovieImage,
  MovieList,
  Movie,
  MovieTitle,
  CartContainer,
  MovieButton,
} from './styles';

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

const List: React.FC = () => {
  const { addToCart } = useCart();

  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const response = await api.get();
      setMovies(response.data.results);
    }

    loadMovies();
  }, []);

  const handleAddToCart = useCallback(
    (item: IMovie): void => {
      addToCart(item);
    },
    [addToCart],
  );

  return (
    <>
      <Container>
        <MovieContainer>
          <MovieList
            data={movies}
            keyExtractor={item => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }) => (
              <Movie>
                <MovieImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`,
                  }}
                />
                <MovieTitle>{item.title}</MovieTitle>
                <CartContainer>
                  <MovieButton onPress={() => handleAddToCart(item)}>
                    <FeatherIcon size={20} name="plus" color="#C4C4C4" />
                  </MovieButton>
                </CartContainer>
              </Movie>
            )}
          />
        </MovieContainer>
        <FloatingCart />
      </Container>
    </>
  );
};

export default List;

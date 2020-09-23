import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

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
  image: string;
}

const List: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function loadMovies(): Promise<void> { }

    loadMovies();
  }, []);

  const handleAddToCart = useCallback((item: IMovie): void => { }, []);
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
          renderItem={({ item }) => (
            <Movie>
              <MovieImage source={{ uri: item.image }} />
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
    </Container>
  );
};

export default List;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const MovieContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const MovieList = styled(FlatList as new () => FlatList<IMovie>).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Movie = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const MovieImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const MovieTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const CartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const MovieButton = styled.TouchableOpacity``;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';

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

export const MovieList = styled(FlatList)`
  flex: 1;
  padding: 0 10px;
`;

export const Movie = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;
`;

export const MovieImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const MovieTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const MovieTitle = styled.Text`
  font-size: 16px;
`;

export const MoviePriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const MovieQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalMoviesContainer = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalMoviesText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 15px;

  flex: 1;
  font-weight: bold;
`;

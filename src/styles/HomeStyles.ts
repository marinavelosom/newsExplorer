import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const ClearIcon = styled(FontAwesome).attrs({
  name: 'close',
  size: 15,
  color: 'black',
})`
  margin-right: 8px;
`;

export const HomeContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const LogoImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  margin-top: 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.View` 
  flex-direction: row;
  align-items: center;
  border-color: gray;
  border-width: 1px;
  border-radius: 15px;
  margin: 10px;
  margin-top: 30px;
  padding-left: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 30px;
  padding-left: 8px;
`;

export const SearchIcon = styled(FontAwesome).attrs({
  name: 'search',
  size: 15,
  color: 'black',
})`
  margin-right: 8px;
`;

export const HistoryContainer = styled.View`
  /* background-color: #fff; */
  /* border-width: 1px; */
  /* border-color: #ccc; */
  width: 95%;
  border-radius: 8px;
  margin-bottom: 10px;
  max-height: 200px;
`;

export const HistoryItem = styled.Text`
  padding: 8px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

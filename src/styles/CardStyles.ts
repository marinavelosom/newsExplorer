import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  align-items: flex-start;
`;

export const CardImage = styled.Image`
  width: 90px;
  height: 150px;
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 10px;
`;

export const CardImageContainer = styled.View`
    padding: 10px;
    align-items: center;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Header = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  width: 32%;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const TextFixed = styled.Text`
  font-size: 10px;
  color: #555;
  margin-top: 30px;
`;
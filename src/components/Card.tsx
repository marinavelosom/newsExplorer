import React from 'react';
import { Linking, ImageBackground } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { 
  CardContainer, 
  CardImage, 
  CardImageContainer,
  CardContent,
  Header, 
  Title, 
  Subtitle, 
  Text, 
  TextFixed, 
} from '../styles/CardStyles';

interface CardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, author, description, imageUrl }) => {

  return (
    <CardContainer>
      <CardContent>
        <CardImage />
        <Header>
          <Title>{title}</Title>
          <TextFixed>By</TextFixed>
          <Subtitle>{author}</Subtitle>
        </Header>
      <Text>{description}</Text>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

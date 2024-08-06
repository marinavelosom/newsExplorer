import React from 'react';
import { Linking } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { 
  ArticleContainer,
  ArticleLink,
  Title,
  Text,
  TextAuthor,
  TextContent,
} from '../styles/ArticleStyles';
type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

interface ArticleScreenProps {
  route: ArticleScreenRouteProp;
}

const ArticleScreen: React.FC<ArticleScreenProps> = ({ route }) => {
  const { title, author, content, url } = route.params;
  
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <ArticleContainer>
      <Title>{title}</Title>
      <TextAuthor>{author}</TextAuthor>
      <TextContent>{content}</TextContent>
      <ArticleLink onPress={handlePress}>Full article</ArticleLink>
    </ArticleContainer>
  );
};

export default ArticleScreen;

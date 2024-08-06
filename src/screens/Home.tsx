import React, { useEffect, useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import Card from '../components/Card';
import { 
  HomeContainer, 
  LogoImage,
  Title, 
  TitleContainer,
} from '../styles/HomeStyles';
import { getTopHeadlines } from '../services/NewsServices';
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Article {
  title: string;
  source: {
    name: string;
  };
  author: string;
  description: string;
  content: string;
  urlToImage: string;
  url: string;
}

const HomeScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getTopHeadlines();
        setArticles(news);
        console.log( news)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <HomeContainer>
        <Text>Loading...</Text>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <TitleContainer>
        <LogoImage source={require('../../assets/logo.png')} />
        <Title>News Explorer</Title>
      </TitleContainer>

      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            author={item.author}
            description={item.description}
            imageUrl={item.urlToImage}
          />
        )}
      />
    </HomeContainer>
  );
};


export default HomeScreen;
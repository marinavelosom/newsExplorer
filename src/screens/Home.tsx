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
  SearchContainer,
  SearchInput,
  SearchIcon,
} from '../styles/HomeStyles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native';
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


import { getTopHeadlines } from '../services/NewsServices';

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
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getTopHeadlines();
        setArticles(news);
        console.log(news)
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
      
      <SearchContainer>
        <SearchInput
          placeholder="Search for news, authors..."
          value={searchKeyword}
          onChangeText={(text:string) => setSearchKeyword(text)}
        />
        {searchKeyword === '' && <SearchIcon />}
      </SearchContainer>

      <FlatList
        data={articles.filter(article => 
          (article.title && article.title.toLowerCase().includes(searchKeyword.toLowerCase())) ||
          (article.description && article.description.toLowerCase().includes(searchKeyword.toLowerCase()))
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            author={item.author}
            description={item.description}
            imageUrl={item.urlToImage}
            onPress={() => navigation.navigate('Article', {
              title: item.title,
              author: item.author,
              content: item.content,
              url: item.url,
            })}
          />
        )}
      />
    </HomeContainer>
  );
};


export default HomeScreen;
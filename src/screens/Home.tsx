import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';
import { 
  ClearIcon,
  HomeContainer, 
  LogoImage,
  Title, 
  TitleContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  HistoryContainer,
  HistoryItem,
} from '../styles/HomeStyles';
import { getTopHeadlines } from '../services/NewsServices';
import { RootStackParamList } from '../navigation/types';

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
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getTopHeadlines();
        setArticles(news);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearchSubmit = (keyword: string) => {
    setSearchKeyword(keyword);
    setShowHistory(false);
    if (keyword && !searchHistory.includes(keyword)) {
      setSearchHistory([...searchHistory, keyword]);
    }
  };

  const handleHistoryItemPress = (keyword: string) => {
    setSearchKeyword(keyword);
    setShowHistory(false);
  };

  const clearSearch = () => {
    setSearchKeyword('');
    setShowHistory(false);
  };

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
          onChangeText={(text: string) => {
            setSearchKeyword(text);
            setShowHistory(true);
          }}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setShowHistory(false)}
          onSubmitEditing={() => handleSearchSubmit(searchKeyword)}
        />
        {searchKeyword === '' ? (
          <SearchIcon/>
        ) : (
          <TouchableOpacity onPress={clearSearch}>
            <ClearIcon/>
          </TouchableOpacity>
        )}
      </SearchContainer>

      {showHistory && searchHistory.length > 0 && (
        <HistoryContainer>
          {searchHistory.map((historyItem, index) => (
            <TouchableOpacity key={index} onPress={() => handleHistoryItemPress(historyItem)}>
              <HistoryItem>{historyItem}</HistoryItem>
            </TouchableOpacity>
          ))}
        </HistoryContainer>
      )}

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

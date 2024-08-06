import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, FlatList, Text, View, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  SearchContainer,
  SearchInput,
  SearchItem,
  SearchItemText,
} from '../styles/SearchBarStyles';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    };

    loadHistory();
  }, []);

  const saveSearchTerm = async (term: string) => {
    const updatedHistory = [term, ...searchHistory.filter(t => t !== term)];
    setSearchHistory(updatedHistory);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    saveSearchTerm(term);
    onSearch(term);
    setShowHistory(false);
    Keyboard.dismiss();
  };

  return (
    <SearchContainer>
      <SearchInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        onFocus={() => setShowHistory(true)}
        onBlur={() => setTimeout(() => setShowHistory(false), 100)}
        placeholder="Search..."
      />
      {showHistory && (
        <FlatList
          data={searchHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SearchItem onPress={() => handleSearch(item)}>
              <SearchItemText>{item}</SearchItemText>
            </SearchItem>
          )}
        />
      )}
    </SearchContainer>
  );
};

export default SearchBar;

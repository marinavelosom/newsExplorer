import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchResults'>;

const SearchResultsScreen: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Text>Search Results Screen</Text>
      <Text>Query: {route.params.query}</Text>
    </View>
  );
};

export default SearchResultsScreen;

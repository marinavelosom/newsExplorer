export type RootStackParamList = {
  Home: undefined;
  Article: { title: string; author: string; content: string; url: string; };
  SearchResults: { query: string };
  Login: undefined;
};
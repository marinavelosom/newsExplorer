import React from 'react';
import { ScrollView } from 'react-native';
import Card from '../components/Card';
import { HomeContainer, CardColumn } from '../styles/HomeStyles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ScrollView>
        <CardColumn>
          <Card 
            title="[Título]" 
            author="Nome da pessoa" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo eros, suscipit quis cursus sed, dictum ac dui. Integer massa dui, facilisis a ipsum facilisis, tristique fringilla tellus."
          />
          <Card 
            title="[Título]" 
            author="Nome da pessoa" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo eros, suscipit quis cursus sed, dictum ac dui. Integer massa dui, facilisis a ipsum facilisis, tristique fringilla tellus."
          />
          <Card 
            title="[Título]" 
            author="Nome da pessoa" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo eros, suscipit quis cursus sed, dictum ac dui. Integer massa dui, facilisis a ipsum facilisis, tristique fringilla tellus."
          />
        </CardColumn>
      </ScrollView>
    </HomeContainer>
  );
};

export default Home;

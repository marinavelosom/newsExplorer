import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  Article: { title: string; author: string; content: string };
  SearchResults: { query: string };
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = '';

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Login') {
          iconName = 'log-in-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Login" component={LoginScreen}/>
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
    {/* <Stack.Screen name="SearchResults" component={SearchResultsScreen} /> */}
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default AppNavigator;

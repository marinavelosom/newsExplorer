import { StyleSheet } from 'react-native';

const tabBarStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f5f5f5',
    borderTopColor: '#eee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default tabBarStyles;

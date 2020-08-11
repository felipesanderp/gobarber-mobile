import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
};

export default App;

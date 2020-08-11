import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto-slab';

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
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

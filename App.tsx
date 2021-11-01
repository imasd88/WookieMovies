/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/navigation/TabNavigator';
import { HomeStack } from './src/navigation/HomeStack';


const App = () => {
  return (

    <NavigationContainer>
      {/* <TabNavigator /> */}
      <HomeStack/>
    </NavigationContainer>

  )
};

export default App;

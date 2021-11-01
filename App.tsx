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
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
<Provider store={store}>
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <HomeStack/>
    </NavigationContainer>
    </Provider>
  )
};

export default App;

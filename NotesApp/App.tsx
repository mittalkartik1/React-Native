import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';

const App = () => { 

  const reduxStore = store;

  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>      
    </Provider>
  );
};

export default App;

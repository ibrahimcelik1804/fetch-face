import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/router/rootNavigation';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

/**
 * CrebitPay - React Native App
 * Advanced architecture with Redux Toolkit and React Navigation
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { RootNavigator } from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;

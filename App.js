import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import MainComponent from './components/MainComponent'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

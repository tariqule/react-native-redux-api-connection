import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import CustomerScreen from './Screens/CustomerScreen';
import Navigator from './Screens/Navigator'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/rootReducer';



const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

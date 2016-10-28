import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../app/configureStore'
import App from './app'

const store = configureStore();

export default class Root extends Component {
  render() {
    return  (
       <Provider store={store}>
         <App />
       </Provider>
    )
  }
}
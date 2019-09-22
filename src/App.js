import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar";

import store from './store';



export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <MainPage />
        </div>
      </Provider>
    )
  }

}


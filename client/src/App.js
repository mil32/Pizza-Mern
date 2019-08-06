import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import style from './app.module.scss';

import Header from './components/header';
import Home from './pages/home';
import Pizza from './pages/pizzas'

export default class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  
  render() {
      return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/pizza" component={Pizza} />
        </Router>
      );
    }
}
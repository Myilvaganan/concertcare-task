import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import UserProfile from './UserProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

import Todos from './Todos';
import CreatePostForm from './utils/Form';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/user/:id' component={UserProfile} />
          <Route exact path='/user/:id/todos' component={Todos} />
          <Route exact path='/user/:id/create' component={CreatePostForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

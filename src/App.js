/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-use-before-define */
import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import About from './About';
import Young from './Young';
import Search from './Search';
import App from './App';
import './index.css';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/search" component={Search}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);

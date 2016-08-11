import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router';
import Helpers from './utils/Helpers.js';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      colors: [],
      results: [],
      listyle: []
    };
  }
  /* the event button for the drinks api */
  getDrinks(event) {
    event.preventDefault();

    this.setState({
      isFetching: true
    });


  render() {
    return (
      <div className="App">
      <h1>Search MixologZy</h1>
      <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      </div>
    );
  }
}

export default Search;

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
      {/* here i will do a drop down, that will call at the api based on the selection */}
      {/* popular drinks dropdown */}
      <select name="popular">
        <option value="roni">NEGRONI</option>
        <option value="car">SIDECAR</option>
        <option value="mint">MINT JULEP</option>
        <option value="sour">WHISKEY SOUR</option>
        <option value="cosmo">COSMOPOLITAN</option>
      </select>
      <input type="text" name="searchdrinks">
      </div>
    );
  }
}

export default Search;

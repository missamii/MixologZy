import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Helpers from './utils/Helpers.js';

class Search extends Component {

  constructor(){
    super()
    this.state = {
      allDrinks: [],
      results: [],
      ingredients: [],
      brands: [],
      skill: [],
      occasions: []
    };
  }

  /* the event drop down button for the drinks api */
  getAllDrinks(event) {
    event.preventDefault();
    Helpers.getAllDrinks().then((value) => {
      console.log(value);


    });
  }

  render(){
    // console.log(this.state);
    return (
      <div className="Search">
        <h1>Search MixologZy</h1>
        <br /> <br /> <br />

        {/* onChange function for api call with drop down*/}
          <div className="dropdown">
            <button className="dropbtn">Top 5 Popular Drinks</button>
            <div className="dropdown-content">
              <a href="#">Caipirinha</a>
              <a href="#">Mint Julep</a>
              <a href="#">Mimosa</a>
              <a href="#">Margarita</a>
              <a href="#">Negroni</a>
            </div>
          </div> <input type="text" placeholder="old fashion, bloody m....." className="searchdrinks" /> <button className="search" onClick={(event) => this.getAllDrinks(event)}>Search All</button>
        <h2>Nothing shows up? <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">Install this plugin</a></h2>


          <div className="container">
             {/* drinks .map should go here to render all drinks or just a list of the popular ones */}
          </div>
      </div>
    );
  }
}

export default Search

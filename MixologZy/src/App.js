import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Young from './Young';
import Search from './Search.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to MixologZy</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br /> <br />

          <div className="svg-wrapper">
            <svg height="60" width="300" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="300" />
            </svg>
          <div className="text"><center><Link id="link" to="/search">21 + ?</Link></center></div>
          </div>
          {/* build another button for routing to page Young.js */}
          {this.props.children}
          {/*
                      <center><button className="button"><Link to="/Search">21 + ?</Link></button> <button className="button"><Link to="/Young">20 - ?</Link></button></center>
            maybe I can figure a pop up box in here or just use Yes or No Buttons*/}
          {/*This will be the welcome/splash page. Here I'll do a splash img, that will route the user to the actually app or away if they are under 21*/}
      </div>
    );
  }
}

export default App

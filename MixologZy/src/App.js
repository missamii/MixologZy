import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to MixologZy</h1>
        <img src="glowingcocktail.jpg" className="splash" alt="splash" />
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <button className="button"><Link to="/Search">21 + ?</Link></button>
          <button className="button"><Link to="/">20 - ?</Link></button>

          {/*maybe I can figure a pop up box in here or just use Yes or No Buttons*/}
          {/*This will be the welcome/splash page. Here I'll do a splash img, that will route the user to the actually app or away if they are under 21*/}
      </div>
    );
  }
}

export default App;

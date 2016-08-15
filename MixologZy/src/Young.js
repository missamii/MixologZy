import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';



class Young extends Component {
  render() {
    return (
      <div className="App">
      {/*you are too young gif or something*/}
        <img src="youngimg.png" alt="Smiley face" height="42" width="42">
      </div>
    );
  }
}

export default Young

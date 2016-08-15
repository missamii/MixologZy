import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Drinks from './Drinks';
import Search from './Search';



class Drink extends Component {
  render() {
    return (
      <div className="Drink">
        <p>{this.props.name} {this.props.skill} {this.props.type} </p>
      </div>
    );
  }
}

export default Drink

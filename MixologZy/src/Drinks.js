import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Search from './Search';


class Drinks extends Component {
  render() {

    // Note: i'll have to change 15-22 to drill into object correctly
    let drink = this.props.drinks.map( (drink) => {

      return(

        <Drink
          name={drink.name}
          skill={drink.skill}
          type={drink.type}
          ingredients={drink.ingredients}
          description={drink.description}
          video={drink.video}
          image={drink.image}
        />

      )

    })

    return (
      <div className="Drinks">
        { drink }
      </div>
    );
  }
}

export default Drinks

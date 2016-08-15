
this.setState ({
  ajaxData: name={drink.id}
  skill={drink.skill}
  type={drink.type}
  ingredients={drink.ingredients}
  description={drink.description}
  video={drink.video}
  image={drink.image}
  showDrinksComponent: true
});


      {/* <div>
        { this.state.showDrinksComponent ? <Drinks drinks={this.state.ajaxData} /> : null }
      <div>*/}



      displayDrink.map((display, i) => {
        return {/* put appended drinks to show here*/}
      })















      import React, { Component } from 'react';
      import './App.css';
      // import { Button } from 'react-bootstrap';
      import { Link } from 'react-router';
      import { Router, Route, browserHistory } from 'react-router';
      import Helpers from './utils/Helpers.js';
      import Drinks from './Drinks';
      import Drink from './Drink';



      class Search extends Component {
        constructor(){
          super()
          this.state = {
            ajaxData: [],
            showDrinksComponent: false
          };
        }

        /* the event dropdown & search all button for the drinks api */
        getAllDrinks(drinkNames) {
          event.preventDefault();
          Helpers.getAllDrinks(drinkNames).then((value) => {

          });
        }

        // I may take this out, because it conflicts with the preventDefault & I ended up just giving the // // dropdown a filler instead.
        componentDidMount() {
          console.log('component mounted!')
          this.getAllDrinks('mint julep')
        }

        render(){
          // console.log(this.state);
          return (
            <div className="Search">
              <h1>Search MixologZy</h1>
              <br /> <br /> <br />

              {/* onChange function for api call with drop down */}
                <select onChange={(event) => this.getAllDrinks(event.target.value)}>
                  <option value="start">Top 5 popular drinks</option>
                  <option value="mint%20julep">Mint Julep</option>
                  <option value="mimosa">mimosa</option>
                  <option value="margarita">Margarita</option>
                  <option value="negroni">Negroni</option>
                </select>
                 <input type="text" placeholder="old fashion, bloody m....." className="searchdrinks" /> <button className="search" onClick={(event) => this.getAllDrinks(event)}>Search All</button>
              <h2>Nothing shows up? <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">Install this plugin</a></h2>


              <div className="container">
                 {/* drinks .map should go here to render all drinks or just a list of the popular ones */}
                   {

                   }
                 { this.state.showDrinksComponent ? <Drinks drinks={this.state.ajaxData} /> : null }

              </div>
            </div>

          );
        }
      }

      export default Search

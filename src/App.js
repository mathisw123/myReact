import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            checkboxNames: ["a1", "a2", "a3"]
        }
    };



  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
          <div>
              hello, world.
              <hr/>
              <ShoppingList name="Mark" params={this.state}/><ShoppingList name="John" params={this.state}/>
          </div>
      </div>
    );
  }
}

export default App;




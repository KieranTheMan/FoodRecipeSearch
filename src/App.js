import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

//get API, class App extends Component

class App extends Component () {
  getRecipe() {
   console.log('working');
  }

  return () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 clsssName='App-title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}
export default App;

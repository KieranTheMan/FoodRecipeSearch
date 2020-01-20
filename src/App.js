import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

//get API, class App extends Component
//e full page prevent the default 
class App extends Component {
  getRecipe = (e) => {
    e.preventDefault();
    console.log('working');
  }

  render () {
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

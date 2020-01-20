import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

//get API, class App extends Component
//e full page prevent the default 
class App extends Component {
  getRecipe = (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault(); // prefevents the fullpage frome refreshing
    console.log(recipeName);
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}
export default App;

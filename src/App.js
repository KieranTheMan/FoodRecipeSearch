import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '01f595e31a6643bc981009465687ee75'
 
class App extends Component {
  getRecipe = (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault(); // prefevents the fullpage from refreshing
    const api_call = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY'
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

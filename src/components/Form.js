import React from 'react'

//stateless component
//name atribute reads values from inout
const Form = props => (
    <form onSubmit= {props.getRecipe}>
        <input type='text' name='recipeName'/>
        <button>Search</button>
    </form>
);

export default Form;

import React from 'react'

//stateless component

const Form = props => (
    <form onSubmit= {props.getRecipe}>
        <input type='text'/>
        <button>Search</button>
    </form>
);

export default Form;

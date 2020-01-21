import React from 'react'

//stateless component
//name atribute reads values from inout
const Form = props => (
    <form onSubmit= {props.getFood}>
        <input type='text' name='foodName'/>
        <button>Search</button>
    </form>
);

export default Form;

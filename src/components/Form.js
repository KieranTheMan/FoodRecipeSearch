import React from 'react'

//stateless component
//name atribute reads values from inout
const Form = props => (
    <form onSubmit= {props.getFood} style={{ marginBottom:'2rem'}}>
        <input className='form__input' required type='text' name='foodName'/>
        <button className='form__button'>Search</button>
    </form>
);

export default Form;

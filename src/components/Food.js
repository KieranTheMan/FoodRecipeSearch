import React, { Component } from 'react';
const API_KEY = '040fb28bea6246d79d1a029c1f6f212e'

class Food extends Component {

    state = {
        activefood: []
    }

    componentDidMount = async () => {
            const title = this.props.location.state.food
            const req = await fetch(`https://api.spoonacular.com/food/products/search?query=${title}&apiKey=${API_KEY}`)
            const res = await req.json();
            console.log(res.products[0]);
        }

    render() {
        console.log(this.props);
        return (
            <div>Food Component</div>
        );
    }
}

export default Food;
import React, { Component } from 'react';
const API_KEY = '040fb28bea6246d79d1a029c1f6f212e'

class Food extends Component {

    state = {
        activeFood: []
    }

    componentDidMount = async () => {
            const title = this.props.location.state.food;
            const req = await fetch(`https://api.spoonacular.com/food/products/search?query=${title}&apiKey=${API_KEY}`);
            const res = await req.json();
            this.setState({activeFood: res.products[0]});
            console.log(this.state.activeFood);
        }

    render() {
        const food = this.state.activeFood;
        return (
            <div className='container'>
                <div className='active-food'>
                    <img className='active-food_img' src={food.image} alt =
                    {food.title}/>
                    <h3 className='acitve-food_title'>{food.title}</h3>
                </div>
            </div>
        );
    }
}

export default Food;
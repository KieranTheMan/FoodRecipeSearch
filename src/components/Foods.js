import React from 'react';
import {Link} from 'react-router-dom';
const Foods = props => (
    <div className='container'>
        <div className='row'>
            {props.foods.map((food) => {
                return (
                    <div key={food.id} className='col-md-4' style={{ marginBottom: '5rem'}}>
                        <div className='food__box'>
                            <img 
                                className='food__box'
                                src={food.image} 
                                alt={food.title}
                            />
                            <div className='food__text'>
                                <h1 className='foods__title'>
                                    {food.title.length < 20 ? `${food.title}` : `${food.title.substring(0, 25)}...`}
                                </h1>
                                <button className='food__buttons'>
                                <Link to={{
                                    pathname: `/food/${food.id}`,
                                    state: {food: food.title}
                                    }}>View Product</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Foods;
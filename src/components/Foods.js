import React from 'react';

const Foods = props => (
    <div className='container'>
        <div className='row'>
            {props.foods.map((food) => {
                return (
                    <div className='col-md-4'>
                        <div className='food__box'>
                            <img 
                                className='food__box-img'
                                src={food.image} 
                                alt={food.title}
                            />
                            <div className='food__text'>
                                <h5>{food.title}</h5>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Foods;
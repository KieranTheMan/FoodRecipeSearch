import React from 'react';

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
                                <h1 className='foods__title'>{food.title}</h1>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Foods;
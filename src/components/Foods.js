import React from 'react';

const Foods = props => (
    <>
        {props.foods.map((food) => {
            return (
              <>
                <img key={food.id}src={food.image} alt={food.title}/>
                <p>{food.title}</p>
              </>
            ) 
          })}
    </>
);

export default Foods;
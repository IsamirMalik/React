import React from 'react';

const Card = ({ recipe }) => {
  return (
    <div>
      <div >
        <img style={{width:"350px",}} src={recipe.image}  alt={recipe.name} />
        <div>
          <span >
            {recipe.cuisine}
          </span>
        </div>
      </div>
      <div >
        <h3 >
          {recipe.name}
        </h3>
        <div >
          <span >
            {recipe.cuisine} Cuisine
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Card; 
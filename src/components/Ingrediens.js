import React, { useState } from 'react';

const Ingredients = (props) => {
  const [ingredientsCheck, setIngredientsCheck] = useState({});

  const handleCheckBox = (e) => {
    setIngredientsCheck({
      ...ingredientsCheck,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>Ingredients</h2>
      {props.process ? (
        ingredients.map((ingredient, index) => {
          <label data-testid={`${index}-ingredient-step`}>
            <input
              name={ingredient}
              type="checkbox"
              checked={ingredientsCheck.ingredient}
              onChange={handleCheckBox}
            />
            {ingredient}
          </label>;
        })
      ) : (
        <ul>
          {ingredients.map((ingredient, index) => {
            <li data-testid={`${index}-ingredient-name-and-measure`}>
              {ingredient}
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Ingredients;

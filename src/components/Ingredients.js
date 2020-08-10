import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppReceitaContext from '../context/AppReceitaContext';
import useIngredientsProgress from '../hooks/useIngredientsProgress';

const Ingredients = (props) => {
  const { ingredientsCheck, setIngredientsCheck, ingredients } = useIngredientsProgress(
    props.isFoodRecipe,
  );

  const handleCheckBox = (e) => {
    const { name } = e.target;
    setIngredientsCheck({
      ...ingredientsCheck,
      [name]: !ingredientsCheck[name],
    });
  };

  return (
    <div>
      <h2>Ingredients</h2>
      {props.process ? (
        Object.entries(ingredients).map(([ingredient, measure], index) => (
          <label
            style={{ textDecoration: ingredientsCheck[ingredient] ? 'line-through' : 'inherit' }}
            data-testid={`${index}-ingredient-step`}
            htmlFor={ingredient}
          >
            <input
              name={ingredient}
              id={ingredient}
              type="checkbox"
              checked={ingredientsCheck[ingredient]}
              onChange={handleCheckBox}
            />
            {`${ingredient} - ${measure}`}
          </label>
        ))
      ) : (
        <ul>
          {Object.entries(ingredients).map(([ingredient, measure], index) => (
            <li
              data-testid={`${index}-ingredient-name-and-measure`}
            >{`${ingredient} - ${measure}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Ingredients.propTypes = {
  process: PropTypes.bool,
};

Ingredients.defaultProps = {
  process: false,
};

export default Ingredients;

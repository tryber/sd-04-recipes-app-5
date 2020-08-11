import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppReceitaContext from '../context/AppReceitaContext';

const Ingredients = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const [ingredientsCheck, setIngredientsCheck] = useState({});

  let ingredients = {};
  let i = 1;

  while (recipe[`strIngredient${i}`]) {
    ingredients = {
      ...ingredients,
      [recipe[`strIngredient${i}`]]: recipe[`strMeasure${i}`],
    };
    i += 1;
  }

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
        Object.entries(ingredients).map(([ingredient, measure], index) => (
          <label data-testid={`${index}-ingredient-step`} htmlFor={ingredient}>
            <input
              name={ingredient}
              type="checkbox"
              checked={ingredientsCheck.ingredient}
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

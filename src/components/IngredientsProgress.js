import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let initialIngredientsCheck = {};

const IngredientsProgress = (props) => {
  const { ingredientsCheck, setIngredientsCheck, recipeId, inProgressRecipes, type } = props;
  useEffect(() => {
    if (Object.keys(inProgressRecipes[type]).some((id) => id === recipeId)) {
      initialIngredientsCheck = inProgressRecipes[type][recipeId];
    }
    setIngredientsCheck({ ...initialIngredientsCheck });
  }, []);
  const handleCheckBox = ({ target: { name } }) => {
    setIngredientsCheck({
      ...ingredientsCheck,
      [name]: { ...ingredientsCheck[name], checked: !ingredientsCheck[name].checked },
    });
  };
  return (
    <div>
      <h2>Ingredients</h2>
      {Object.entries(ingredientsCheck).map(([ingredient, ingredientData], index) => (
        <label
          key={ingredient}
          style={{ textDecoration: ingredientData.checked ? 'line-through' : 'inherit' }}
          data-testid={`${index}-ingredient-step`}
          htmlFor={ingredient}
        >
          <input
            name={ingredient}
            id={ingredient}
            type="checkbox"
            checked={ingredientData.checked}
            onChange={handleCheckBox}
          />
          {`${ingredient} - ${ingredientData.measure}`}
        </label>
      ))}
      ))
    </div>
  );
};

IngredientsProgress.propTypes = {
  inProgressRecipes: PropTypes.shape({
    cocktails: PropTypes.objectOf(
      PropTypes.shape({ measure: PropTypes.string, checked: PropTypes.bool }),
    ),
    meals: PropTypes.objectOf(
      PropTypes.shape({ measure: PropTypes.string, checked: PropTypes.bool }),
    ),
  }),
  ingredientsCheck: PropTypes.objectOf(
    PropTypes.shape({ measure: PropTypes.string, checked: PropTypes.bool }),
  ),
  process: PropTypes.bool,
  recipeId: PropTypes.string,
  setIngredientsCheck: PropTypes.func,
  type: PropTypes.string,
};

IngredientsProgress.defaultProps = {
  inProgressRecipes: { meals: {}, cocktails: {} },
  ingredientsCheck: {},
  process: false,
  recipeId: '',
  setIngredientsCheck: () => console.log('função default'),
  type: 'meal',
};

export default IngredientsProgress;

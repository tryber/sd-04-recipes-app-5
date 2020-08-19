import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import HeaderButtons from './HeaderButtons';
import AppReceitaContext from '../context/AppReceitaContext';

const RecipeHeader = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  const { strCategory, strAlcoholic, strDrink, strMeal, strMealThumb, strDrinkThumb } = recipe;

  return (
    <header>
      <img
        data-testid="recipe-photo"
        src={isFoodRecipe ? strMealThumb : strDrinkThumb}
        alt={'Some good food'}
      />
      <div>
        <h1 data-testid="recipe-title">{isFoodRecipe ? strMeal : strDrink}</h1>
        <HeaderButtons isFoodRecipe={isFoodRecipe} />
      </div>
      <div>
        <h3 data-testid="recipe-category">{isFoodRecipe ? strCategory : strAlcoholic}</h3>
      </div>
    </header>
  );
};

RecipeHeader.propTypes = {
  isFoodRecipe: PropTypes.bool,
};

RecipeHeader.defaultProps = {
  isFoodRecipe: true,
};

export default RecipeHeader;

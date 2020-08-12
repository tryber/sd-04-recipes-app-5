import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitaContext from '../context/AppReceitaContext';

const handleNewDoneRecipe = (newDoneRecipe) => {
  let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  if (!doneRecipes.some((recipe) => recipe.id === newDoneRecipe.id)) {
    doneRecipes = [...doneRecipes, newDoneRecipe];
  }
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};

const FinishRecipeBtn = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  const {
    idMeal,
    idDrink,
    strArea,
    strCategory,
    strAlcoholic,
    strDrink,
    strMeal,
    strMealThumb,
    strDrinkThumb,
    strTags,
  } = recipe;
  const date = new Date();
  const newDoneRecipe = {
    id: idDrink || idMeal,
    type: isFoodRecipe ? 'comida' : 'bebida',
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strDrink || strMeal,
    image: strDrinkThumb || strMealThumb,
    doneDate: date.toDateString(),
    tags: isFoodRecipe ? strTags.split(',') : [],
  };

  return (
    <Link to={'/receitas-feitas'}>
      <button
        disabled={Object.values(props.ingredientsCheck).some(
          (ingredient) => ingredient.checked === false,
        )}
        className="btn-fixed-footer"
        data-testid="finish-recipe-btn"
        onClick={() => handleNewDoneRecipe(newDoneRecipe)}
      >
        Finalizar Receita
      </button>
    </Link>
  );
};
FinishRecipeBtn.propTypes = {
  ingredientsCheck: PropTypes.objectOf(
    PropTypes.shape({
      measure: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  isFoodRecipe: PropTypes.bool,
};

FinishRecipeBtn.defaultProps = {
  ingredientsCheck: {},
  isFoodRecipe: true,
};

export default FinishRecipeBtn;

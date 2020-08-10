import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import Ingredients from '../components/Ingredients';
import AppReceitaContext from '../context/AppReceitaContext';
import { getMealDetailsById } from '../services/MealDB-API';
import { getDrink } from '../services/DrinkDB-API';

const checkInProgressRecipes = (id, recipeType) => {
  const inProgressRecipes =
    (JSON.parse(localStorage.getItem('inProgressRecipes')) || {})[
      recipeType === 'comidas' ? 'meals' : 'cocktails'
    ] || {};
  return Object.keys(inProgressRecipes).some((recipeId) => recipeId === id);
};

const RecipeProgress = (props) => {
  const { recipe, setRecipe } = useContext(AppReceitaContext);
  const {
    match: {
      params: { id },
      url,
    },
  } = props;
  const recipeType = url.split('/')[1];
  const isFoodRecipe = recipeType === 'comidas';

  useEffect(() => {
    if (isFoodRecipe) {
      getMealDetailsById(id).then((data) => setRecipe(data.meals[0]));
    } else {
      getDrink(id).then((data) => setRecipe(data.drinks[0]));
    }
  }, []);

  if (recipe) {
    return (
      <div>
        <RecipeHeader isFoodRecipe={isFoodRecipe} />
        <Ingredients process={true} isFoodRecipe={isFoodRecipe} />
        <RecipeInstructions />
        <Link to={`/${recipeType}/${id}/in-progress`}>
          <button className="btn-fixed-footer" data-testid="finish-recipe-btn">
            Finalizar Receita
          </button>
        </Link>
      </div>
    );
  }
  return <div>...Loading</div>;
};

RecipeProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

RecipeProgress.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};
export default RecipeProgress;

import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import RecomendedCards from '../components/RecomendedCards';
import IngredientsDetails from '../components/IngredientsDetails';
import AppReceitaContext from '../context/AppReceitaContext';
import { getMealDetailsById } from '../services/MealDB-API';
import { getDrink } from '../services/DrinkDB-API';
import useIngredientsProgress from '../hooks/useIngredientsProgress';

const checkInProgressRecipes = (id, recipeType) => {
  const inProgressRecipes =
    (JSON.parse(localStorage.getItem('inProgressRecipes')) || {})[
      recipeType === 'comidas' ? 'meals' : 'cocktails'
    ] || {};
  return Object.keys(inProgressRecipes).some((recipeId) => recipeId === id);
};

const RecipeDetails = (props) => {
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
        <IngredientsDetails />
        <RecipeInstructions />
        {isFoodRecipe && (
          <div data-testid="video">
            <YouTube videoId={recipe.strYoutube.split('?v=')[1]} />
          </div>
        )}
        <RecomendedCards isFoodRecipe={isFoodRecipe} />
        <Link to={`/${recipeType}/${id}/in-progress`}>
          <button className="btn-fixed-footer" data-testid="start-recipe-btn">
            {checkInProgressRecipes(id, recipeType) ? 'Continuar Receita' : 'Iniciar Receita'}
          </button>
        </Link>
      </div>
    );
  }
  return <div>...Loading</div>;
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

RecipeDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};
export default RecipeDetails;

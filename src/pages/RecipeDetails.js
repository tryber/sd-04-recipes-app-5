import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import YouTube from 'react-youtube';
import RecomendedCards from '../components/RecomendedCards';
import Ingredients from '../components/Ingredients';
import AppReceitaContext from '../context/AppReceitaContext';
import { getMealDetailsById } from '../services/MealDB-API';
import { getDrink } from '../services/DrinkDB-API';
const linkIdPattern = /(?<=youtube\.com\/watch\?v=)\w+/;

const RecipeDetails = (props) => {
  const { recipe, setRecipe } = useContext(AppReceitaContext);
  const {
    match: {
      params: { id },
      url,
    },
  } = props;
  const recipeType = url.split('/')[1];
  const isFoodRecipe = recipeType === 'comidas' ? true : false;

  useEffect(() => {
    if (isFoodRecipe) {
      getMealDetailsById(id).then((data) => setRecipe(data.meals[0]));
    } else {
      getDrink(id).then((data) => setRecipe(data.drinks[0]));
    }
  }, []);

  const checkInProgressRecipes = (id) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    const inProgressRecipesByType = inProgressRecipes[recipeType === 'comidas' ? 'meals' : 'cocktails'] || {};
    return Object.keys(inProgressRecipesByType).some((recipeId) => recipeId === id);
  };

  if (recipe) {
    return (
      <div>
        <RecipeHeader isFoodRecipe={isFoodRecipe} />
        <Ingredients process={false} />
        <RecipeInstructions />
        {isFoodRecipe && (
          <div data-testid="video">
            <YouTube videoId={recipe.strYoutube.match(linkIdPattern)} />
          </div>
        )}
        <RecomendedCards isFoodRecipe={isFoodRecipe} />
        <Link to={`/${recipeType}/${id}/in-progress`}>
          <button class="btn-fixed-footer" data-testid="start-recipe-btn">
            {checkInProgressRecipes(id) ? 'Continuar Receita' : 'Iniciar Receita'}
          </button>
        </Link>
      </div>
    );
  }
  return <div>...Loading</div>;
};

export default RecipeDetails;

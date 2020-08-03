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
  const isFoodRecipe = props.match.url.split('/')[1] === 'comidas' ? true : false;

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
        <Ingredients process={false} />
        <RecipeInstructions />
        {isFoodRecipe && <YouTube data-testid="video" videoId={recipe.strYoutube.match(linkIdPattern)} />}
        <RecomendedCards isFoodRecipe={isFoodRecipe} />
        <Link to={`/bebidas/${id}/in-progress`}>
          <button data-testid="start-recipe-btn">Iniciar Receita</button>
        </Link>
      </div>
    );
  }
  return <div>...Loading</div>;
};

export default RecipeDetails;

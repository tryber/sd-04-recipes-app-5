import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import IngredientsProgress from '../components/IngredientsProgress';
import AppReceitaContext from '../context/AppReceitaContext';
import { getMealDetailsById } from '../services/MealDB-API';
import { getDrink } from '../services/DrinkDB-API';
import useIngredientsProgress from '../hooks/useIngredientsProgress';
import FinishRecipeBtn from '../components/FinishRecipeBtn';

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
  const {
    ingredientsCheck,
    setIngredientsCheck,
    ingredients,
    recipeId,
    inProgressRecipes,
    type,
  } = useIngredientsProgress(isFoodRecipe);

  useEffect(() => {
    if (isFoodRecipe) {
      getMealDetailsById(id).then((data) => setRecipe({ ...data.meals[0] }));
    } else {
      getDrink(id).then((data) => setRecipe({ ...data.drinks[0] }));
    }
  }, []);

  if (recipe) {
    return (
      <div>
        <RecipeHeader isFoodRecipe={isFoodRecipe} />
        <IngredientsProgress
          process
          isFoodRecipe={isFoodRecipe}
          ingredientsCheck={ingredientsCheck}
          setIngredientsCheck={setIngredientsCheck}
          ingredients={ingredients}
          recipeId={recipeId}
          inProgressRecipes={inProgressRecipes}
          type={type}
        />
        <RecipeInstructions />
        <FinishRecipeBtn ingredientsCheck={ingredientsCheck} isFoodRecipe={isFoodRecipe} />
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

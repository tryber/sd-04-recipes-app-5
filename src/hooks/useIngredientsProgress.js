import { useState, useEffect, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

const useIngredientsProgress = (isFoodRecipe) => {
  const { recipe } = useContext(AppReceitaContext);
  const [ingredientsCheck, setIngredientsCheck] = useState({});
  const type = isFoodRecipe ? 'meals' : 'cocktails';

  let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {},
    meals: {},
  };

  let recipeId = null;
  let ingredients = {};
  let i = 1;

  if (recipe) {
    recipeId = isFoodRecipe ? recipe.idMeal : recipe.idDrink;
  }

  useEffect(() => {
    if (recipe && !Object.keys(inProgressRecipes[type]).some((id) => id === recipeId)) {
      while (recipe[`strIngredient${i}`]) {
        ingredients = {
          ...ingredients,
          [recipe[`strIngredient${i}`]]: recipe[`strMeasure${i}`],
        };
        i += 1;
      }
      const initialIngredientsCheck = {};
      Object.entries(ingredients).forEach(
        (ingredientKey) =>
          (initialIngredientsCheck[ingredientKey[0]] = {
            checked: false,
            measure: ingredientKey[1],
          }),
      );
      setIngredientsCheck({ ...initialIngredientsCheck });
    }
  }, [recipe]);

  useEffect(() => {
    if (recipeId) {
      inProgressRecipes = {
        ...inProgressRecipes,
        [type]: { ...inProgressRecipes[type], [recipeId]: { ...ingredientsCheck } },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
  }, [ingredientsCheck]);

  return { ingredientsCheck, setIngredientsCheck, ingredients, recipeId, inProgressRecipes, type };
};

export default useIngredientsProgress;

import { useState, useEffect, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

const useIngredientsProgress = (isFoodRecipe) => {
  const { recipe } = useContext(AppReceitaContext);
  const type = isFoodRecipe ? 'meals' : 'cocktails';
  const recipeId = isFoodRecipe ? recipe.idMeal : recipe.idDrink;

  let ingredients = {};
  let i = 1;

  while (recipe[`strIngredient${i}`]) {
    ingredients = {
      ...ingredients,
      [recipe[`strIngredient${i}`]]: recipe[`strMeasure${i}`],
    };
    i += 1;
  }

  let initialIngredientsCheck = {};
  let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {},
    meals: {},
  };
  if (
    Object.keys(inProgressRecipes[type]).some((recipe) => {
      return recipe === recipeId;
    })
  ) {
    initialIngredientsCheck = inProgressRecipes[type][recipeId];
  } else {
    Object.keys(ingredients).forEach(
      (ingredientKey) => (initialIngredientsCheck[ingredientKey] = false),
    );
  }

  const [ingredientsCheck, setIngredientsCheck] = useState({ ...initialIngredientsCheck });

  useEffect(() => {
    inProgressRecipes = {
      ...inProgressRecipes,
      [type]: { ...inProgressRecipes[type], [recipeId]: { ...ingredientsCheck } },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [ingredientsCheck]);

  return { ingredientsCheck, setIngredientsCheck, ingredients };
};

export default useIngredientsProgress;

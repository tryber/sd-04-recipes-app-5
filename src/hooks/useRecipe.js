import { useContext, useState, useEffect } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

const setNewFavorite = (recipe, favoriteRecipes, isFoodRecipe) => {
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
  } = recipe;

  favoriteRecipes.push({
    id: idDrink || idMeal,
    type: isFoodRecipe ? 'comida' : 'bebida',
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strDrink || strMeal,
    image: strDrinkThumb || strMealThumb,
  });
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

const useRecipe = (isFoodRecipe) => {
  const { recipe } = useContext(AppReceitaContext);
  const [favorite, setFavorite] = useState(false);

  const { idMeal, idDrink } = recipe;

  const checkFavorite = (id) => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    return favoriteRecipes.findIndex((favRecipe) => favRecipe.id === id);
  };

  const handleFavorite = (id) => {
    setFavorite(!favorite);
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const index = checkFavorite(id);
    if (index !== -1) {
      favoriteRecipes.splice(index, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      return index;
    }

    setNewFavorite(recipe, favoriteRecipes, isFoodRecipe);

    return index;
  };

  useEffect(() => {
    if (checkFavorite(idMeal || idDrink) !== -1) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  return { favorite, setFavorite, handleFavorite };
};

export default useRecipe;

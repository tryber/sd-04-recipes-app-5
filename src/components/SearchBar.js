import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';

const SearchBar = () => {
  const fetchesMeals = {
    name: getMealByName,
    ingredient: getMealByIngredients,
    letter: getMealByLetter,
  };

  const fetchesDrinks = {
    name: getDrinkByName,
    ingredient: getDrinkByIngredients,
    letter: getDrinkByLetter,
  };

  return { fetchesDrinks, fetchesMeals };
};

export default SearchBar;

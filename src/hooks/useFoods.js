import { useEffect, useContext } from 'react';
import {
  getMeals,
  getMealsCategories,
  getMealsByCategory,
} from '../services/MealDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useFoods = () => {
  const {
    dataFood,
    setDataFood,
    foodCategories,
    setFoodsCategories,
    dataFoodCategory,
    setDataFoodCategory,
  } = useContext(AppReceitaContext);

  const getFood = async () => {
    const data = await getMeals();
    return data;
  };

  useEffect(() => {
    getFood().then((data) => setDataFood(data.meals));
  }, []);

  const getCategories = async () => {
    const categories = await getMealsCategories();
    return categories;
  };

  // Pega as receitas pela categoria e seta no data sempre que essa categoria for mudada
  useEffect(() => {
    getCategories().then((categories) => setFoodsCategories(categories.meals));
  }, []);

  const getFoodByCategory = async (categoria) => {
    const mealsByCategory = await getMealsByCategory(categoria);
    setDataFoodCategory(mealsByCategory.meals);
  };

  useEffect(() => {
    setDataFood(dataFoodCategory);
  }, [dataFoodCategory]);
  // acaba aqui
  
  return { dataFood, foodCategories, getFoodByCategory };
};

export default useFoods;

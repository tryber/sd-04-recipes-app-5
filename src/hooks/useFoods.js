import { useEffect, useContext } from 'react';
import { getMeals, getMealsCategories, getMealsByCategory } from '../services/MealDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useFoods = () => {
  const {
    dataFood,
    setDataFood,
    category,
    setCategory,
    dataCategory,
    setDataCategory,
    selectCategory,
    setSelectCategory,
  } = useContext(AppReceitaContext);

  const getFood = async () => {
    const data = await getMeals();
    return data;
  };

  useEffect(() => {
    getFood().then((data) => {
      if (dataFood.length === 0) {
        setDataFood(data.meals);
      }
    });
  }, []);

  const getCategories = async () => {
    const categories = await getMealsCategories();
    return categories;
  };

  useEffect(() => {
    getCategories().then((categories) => setCategory(categories.meals));
  }, []);

  const getFoodByCategory = async (categoria) => {
    if (selectCategory === categoria || categoria === 'All') {
      setSelectCategory('');
      const mealsByCategory = await getMeals();
      setDataCategory(mealsByCategory.meals);
    } else {
      setSelectCategory(categoria);
      const mealsByCategory = await getMealsByCategory(categoria);
      setDataCategory(mealsByCategory.meals);
    }
  };

  useEffect(() => {
    if (dataCategory.length !== 0) {
      setDataFood(dataCategory);
    }
  }, [dataCategory]);

  return { dataFood, category, getFoodByCategory };
};

export default useFoods;

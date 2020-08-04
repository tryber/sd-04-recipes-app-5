import { useEffect, useContext } from 'react';
import { getMeals } from '../services/MealDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useFoods = () => {
  const { dataFood, setDataFood } = useContext(AppReceitaContext);

  const getFood = async () => {
    const data = await getMeals();
    return data;
  };

  useEffect(() => {
    getFood().then((data) => setDataFood(data.meals));
  }, []);

  return dataFood;
};

export default useFoods;

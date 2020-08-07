import { useEffect, useContext } from 'react';
import { getMealsCategories } from '../services/MealDBApi';
import AppReceitaContext from '../context/AppReceitaContext';

function useGetCategories() {
  const { mealCategories, setMealCategories } = useContext(AppReceitaContext);

  useEffect(() => {
    getMealsCategories().then((json) => {
      setMealCategories([...json.meals]);
    });

    return () => mealCategories;
  }, []);

  return mealCategories;
}

export default useGetCategories;

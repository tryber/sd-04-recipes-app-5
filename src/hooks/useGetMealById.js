import { useContext } from 'react';
import { getMealDetailsById } from '../services/MealDBApi';
import AppReceitaContext from '../context/AppReceitaContext';

function useGetMealById() {
  const { meal, setMeal, loading, setLoading } = useContext(AppReceitaContext);

  const handleFetchMealSuccess = (json) => {
    if (loading) return;
    setMeal([...json.meals]);
    setLoading(false);
  };

  const handleSetId = (id) => {
    setLoading(true);
    getMealDetailsById(id).then(handleFetchMealSuccess);
  };

  return {
    meal,
    loading,
    handleSetId,
  };
}

export default useGetMealById;

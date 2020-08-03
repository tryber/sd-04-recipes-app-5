import { useEffect, useContext } from 'react';
import fetchFoodApi from '../services/index';
import AppReceitaContext from '../context/AppReceitaContext';

const useFoods = () => {
  const { dataFood, setDataFood } = useContext(AppReceitaContext);

  const getFood = async () => {
    const data = await fetchFoodApi();
    return data;
  };

  useEffect(() => {
    getFood().then((data) => setDataFood(data));
  }, []);

  return dataFood;
};

export default useFoods;

import { useEffect, useContext } from 'react';
import fetchFoodApi from '../services/index';
import AppReceitaContext from '../context/AppReceitaContext';

const useFoods = () => {
  const { dataFood, setDataFood } = useContext(AppReceitaContext);

  //requisição API
  const getFood = async () => {
    const dataFood = await fetchFoodApi();
    return dataFood;
  };

  useEffect(() => {
    getFood().then((data) => setDataFood(data));
  }, []);

  return dataFood;
};

export default useFoods;

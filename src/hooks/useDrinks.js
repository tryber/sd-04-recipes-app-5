import { useEffect, useContext } from 'react';
import fetchDrinkApi from '../services/DrinkDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useDrinks = () => {
  const { dataDrink, setDataDrink } = useContext(AppReceitaContext);

  const getDrink = async () => {
    const data = await fetchDrinkApi();
    return data;
  };

  useEffect(() => {
    getDrink().then((data) => setDataDrink(data));
  }, []);

  return dataDrink;
};

export default useDrinks;

import { useEffect, useContext } from 'react';
import { getDrinks } from '../services/DrinkDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useDrinks = () => {
  const { dataDrink, setDataDrink } = useContext(AppReceitaContext);

  const getDrink = async () => {
    const data = await getDrinks();
    return data;
  };

  useEffect(() => {
    getDrink().then((drinks) => setDataDrink(drinks.drinks));
  }, []);

  return dataDrink;
};

export default useDrinks;

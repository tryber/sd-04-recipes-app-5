import { useEffect, useContext } from 'react';
import { getDrinks, getDrinksCategories, getDrinksByCategory } from '../services/DrinkDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

const useDrinks = () => {
  const {
    dataDrink,
    setDataDrink,
    category,
    setCategory,
    dataCategory,
    setDataCategory,
    selectCategory,
    setSelectCategory,
  } = useContext(AppReceitaContext);

  const getFetchDrink = async () => {
    const data = await getDrinks();
    return data;
  };

  useEffect(() => {
    getFetchDrink().then((drinks) => {
      if (dataDrink.length === 0) {
        setDataDrink(drinks.drinks);
      }
    });
  }, []);

  const getCategories = async () => {
    const categories = await getDrinksCategories();
    return categories;
  };

  useEffect(() => {
    getCategories().then((categories) => setCategory(categories.drinks));
  }, []);

  const getDrinkByCategory = async (categoria) => {
    if (selectCategory === categoria || categoria === 'All') {
      setSelectCategory('');
      const drinkByCategory = await getDrinks();
      setDataCategory(drinkByCategory.drinks);
    } else {
      setSelectCategory(categoria);
      const drinkByCategory = await getDrinksByCategory(categoria);
      setDataCategory(drinkByCategory.drinks);
    }
  };

  useEffect(() => {
    if (dataCategory.length !== 0) {
      setDataDrink(dataCategory);
    }
  }, [dataCategory]);

  return { dataDrink, category, getDrinkByCategory };
};

export default useDrinks;

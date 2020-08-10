import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState('');
  const [dataCategory, setDataCategory] = useState([]);
  const [idFood, setIdFood] = useState(null);
  const [idDrink, setIdDrink] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);


  const contextValue = {
    dataFood,
    setDataFood,
    dataDrink,
    setDataDrink,
    idFood,
    setIdFood,
    category,
    setCategory,
    dataCategory,
    setDataCategory,
    idDrink,
    setIdDrink,
    recipe,
    setRecipe,
    email,
    setEmail,
    password,
    setPassword,
    isDisable,
    setIsDisable,
    isLogged,
    setIsLogged,
    selectCategory,
    setSelectCategory,
    meals,
    setMeals,
    drinks,
    setDrinks,
  };

  return <AppReceitaContext.Provider value={contextValue}>{children}</AppReceitaContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

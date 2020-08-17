import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

const INITIAL_STATE_DONE_RECIPES = [
  {
    id: '',
    type: '',
    area: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
    doneDate: '',
    tags: [],
  },
];

const INITIAL_STATE_USER_EMAIL = {
  email: '',
}

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState('');
  const [dataCategory, setDataCategory] = useState([]);
  const [idFood, setIdFood] = useState(null);
  const [idDrink, setIdDrink] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [userEmail, setUserEmail] = useState(INITIAL_STATE_USER_EMAIL);
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState(INITIAL_STATE_DONE_RECIPES);
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
    selectCategory,
    setSelectCategory,
    recipe,
    setRecipe,
    userEmail,
    setUserEmail,
    password,
    setPassword,
    isDisable,
    setIsDisable,
    isLogged,
    setIsLogged,
    doneRecipes,
    setDoneRecipes,
    meals,
    setMeals,
    drinks,
    setDrinks,
  };

  return (
    <AppReceitaContext.Provider value={contextValue}>
      {children}
    </AppReceitaContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

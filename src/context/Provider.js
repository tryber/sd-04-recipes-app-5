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
  const [doneRecipes, setDoneRecipes] = useState(INITIAL_STATE_DONE_RECIPES);

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
    email,
    setEmail,
    password,
    setPassword,
    isDisable,
    setIsDisable,
    isLogged,
    setIsLogged,
    doneRecipes,
    setDoneRecipes,
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

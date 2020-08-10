import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [idFood, setIdFood] = useState(null);
  const [idDrink, setIdDrink] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const contextValue = {
    dataFood,
    setDataFood,
    idFood,
    setIdFood,
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
  };

  return <AppReceitaContext.Provider value={contextValue}>{children}</AppReceitaContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

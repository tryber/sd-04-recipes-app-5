import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [idFood, setIdFood] = useState(null);
  const [idDrink, setIdDrink] = useState(null);
  const [recipe, setRecipe] = useState(null);

  const contextValue = {
    dataFood,
    setDataFood,
    idFood,
    setIdFood,
    idDrink,
    setIdDrink,
    recipe,
    setRecipe,
  };

  return <AppReceitaContext.Provider value={contextValue}>{children}</AppReceitaContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

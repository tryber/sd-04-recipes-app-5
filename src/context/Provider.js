import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [foodCategories, setFoodsCategories] = useState([]);
  const [dataFoodCategory, setDataFoodCategory] = useState([]);
  const [idFood, setIdFood] = useState(null);
  const [idDrink, setIdDrink] = useState(null);

  const contextValue = {
    dataFood,
    setDataFood,
    dataDrink,
    setDataDrink,
    idFood,
    setIdFood,
    foodCategories,
    setFoodsCategories,
    dataFoodCategory,
    setDataFoodCategory,
    idDrink,
    setIdDrink,
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

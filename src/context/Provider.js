import React, { useState, useEffect } from 'react';
import AppReceitaContext from './AppReceitaContext';
import fetchFoodApi from '../services/index';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);

  useEffect(() => {
    getFood().then((data) => setDataFood(data.meals));
  }, []);

  const getFood = async () => {
    const data = await fetchFoodApi();
    return data;
  };

  const contextValue = {
    dataFood,
  };
  // aloo teste
  // alo teste 2
  // alo teste 3
  return (
    <AppReceitaContext.Provider value={contextValue}>
      {children}
    </AppReceitaContext.Provider>
  );
}

export default Provider;
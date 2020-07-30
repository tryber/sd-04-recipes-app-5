import React, { useState, useEffect } from 'react';
import AppReceitaContext from './AppReceitaContext';
import fetchFoodApi from '../services/index';

function Provider ({ children }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    getFood().then((data) => setData(data.meals));
  }, []);

  const getFood = async () => {
    const data = await fetchFoodApi();
    return data;
  }

  const contextValue = {
    data,
  }

  return (
    <AppReceitaContext.Provider value={contextValue}>
      {children}
    </AppReceitaContext.Provider>
  )
}

export default Provider;

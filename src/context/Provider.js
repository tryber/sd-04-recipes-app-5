import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitaContext from './AppReceitaContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);

  const contextValue = {
    dataFood,
    setDataFood,
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

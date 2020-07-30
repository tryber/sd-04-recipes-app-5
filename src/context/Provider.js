import React, { useState, useEffect } from 'react';
import AppReceitaContext from './AppReceitaContext';

function Provider ({ children }) {

  const [imagem, setImagem] = useState('');

  const contextValue = {
    imagem,
  }

  return (
    <AppReceitaContext.Provider value={contextValue}>
      {children}
    </AppReceitaContext.Provider>
  )
}

export default Provider;

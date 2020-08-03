import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitaContext from '../context/AppReceitaContext';

function DetailsDrink() {
  const { idDrink } = useContext(AppReceitaContext);

  return (
    <div>
      <p> Nome bebida </p>
      <p> Ingredientes </p>
      <p> Instruções </p>
      <p> Recomendados </p>

      <div className="Recipe-In-Progress">
        <Link to={`/comidas/${idDrink}/in-progress`} />
      </div>
    </div>
  );
}

export default DetailsDrink;

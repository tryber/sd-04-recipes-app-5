import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitaContext from '../context/AppReceitaContext';

function DetailsFood() {
  const { idFood } = useContext(AppReceitaContext);

  return (
    <div>
      <p> Nome comida </p>
      <p> Ingredientes </p>
      <p> Instruções </p>
      <p> Video </p>
      <p> Recomendados </p>

      <div className="Recipe-In-Progress">
        <Link to={`/comidas/${idFood}/in-progress`} />
      </div>
    </div>
  );
}

export default DetailsFood;

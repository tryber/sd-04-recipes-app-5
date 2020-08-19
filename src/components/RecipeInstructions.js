import React, { useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

const RecipeInstructions = () => {
  const { recipe } = useContext(AppReceitaContext);
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">{recipe.strInstructions}</p>
    </div>
  );
};
export default RecipeInstructions;

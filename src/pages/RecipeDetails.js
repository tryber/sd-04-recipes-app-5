import React from 'react';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import YouTube from 'react-youtube';
import RecomendedCards from '../components/RecomendedCards';

const RecipeDetails = () => {
  return (
    <div>
      <RecipeHeader />
      <Ingredients process={false} />
      <RecipeInstructions />
      {food && <YouTube data-testid="video" videoId={string} />}
      <RecomendedCards />
      <button data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
};

export default RecipeDetails;

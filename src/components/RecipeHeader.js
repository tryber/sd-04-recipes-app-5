import React, { useState, useContext } from 'react';
import shareIcon from '../images/searchIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import AppReceitaContext from '../context/AppReceitaContext';

const RecipeHeader = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  return (
    <header>
      <img data-testid="recipe-photo" src={isFoodRecipe ? recipe.strMealThumb : recipe.strDrinkThumb} />
      <div>
        <h1 data-testid="recipe-title">Receita</h1>
        <div>
          <img data-testid="share-btn" src={shareIcon} />
          <img data-testid="favorite-btn" src={whiteHeartIcon} />
        </div>
      </div>
      <div>
        <h3 data-testid="recipe-category">{recipe.strCategory}</h3>
      </div>
    </header>
  );
};

export default RecipeHeader;

import React, { useState } from 'react';
import shareIcon from '../images/searchIcon.svg';
import whiteHearIcon from '../images/whiteHearIcon.svg';

const RecipeHeader = () => {
  <header>
    <img data-testid="recipe-photo" />
    <div>
      <h1 data-testid="recipe-title">Receita</h1>
      <div>
        <img data-testid="share-btn" src={shareIcon} />
        <img data-testid="favorite-btn" src={whiteHearIcon} />
      </div>
    </div>
    <div>
      <h3 data-testid="recipe-category">Categoria</h3>
    </div>
  </header>;
};

export default RecipeHeader;

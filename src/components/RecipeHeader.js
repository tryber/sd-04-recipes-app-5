import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useRecipe from '../hooks/useRecipe';

const copy = require('clipboard-copy');

const RecipeHeader = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  const [copied, setCopied] = useState(false);
  const { favorite, handleFavorite } = useRecipe(isFoodRecipe);

  const { idMeal,
    idDrink,
    strCategory,
    strAlcoholic,
    strDrink,
    strMeal,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  const handleShare = () => {
    copy(window.location.href);
    setCopied(!copied);
  };

  return (
    <header>
      <img
        data-testid="recipe-photo"
        src={isFoodRecipe ? strMealThumb : strDrinkThumb}
        alt={'Some good food'}
      />
      <div>
        <h1 data-testid="recipe-title">{isFoodRecipe ? strMeal : strDrink}</h1>
        <div>
          <button onClick={handleShare}>
            <img id="teste" src={shareIcon} alt="share button" data-testid="share-btn" />
          </button>
          <button onClick={() => handleFavorite(idMeal || idDrink)}>
            <img
              src={favorite ? blackHeartIcon : whiteHeartIcon}
              data-testid="favorite-btn"
              alt={'favorite button'}
            />
          </button>
          {copied && <span>Link copiado!</span>}
        </div>
      </div>
      <div>
        <h3 data-testid="recipe-category">{isFoodRecipe ? strCategory : strAlcoholic}</h3>
      </div>
    </header>
  );
};

RecipeHeader.propTypes = {
  isFoodRecipe: PropTypes.bool,
};

RecipeHeader.defaultProps = {
  isFoodRecipe: true,
};

export default RecipeHeader;

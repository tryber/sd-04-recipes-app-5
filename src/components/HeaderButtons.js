import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useRecipe from '../hooks/useRecipe';

const copy = require('clipboard-copy');

const pattern = /http:\/\/localhost:3000\/\w+\/\d+/;

const HeaderButtons = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  const { favorite, handleFavorite } = useRecipe(isFoodRecipe);
  const { idMeal, idDrink, strDrink, strMeal } = recipe;
  const [copied, setCopied] = useState(false);
  const handleShare = () => {
    copy(window.location.href.match(pattern));
    setCopied(!copied);
  };

  return (
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
  );
};

HeaderButtons.propTypes = {
  isFoodRecipe: PropTypes.bool,
};

HeaderButtons.defaultProps = {
  isFoodRecipe: true,
};

export default HeaderButtons;

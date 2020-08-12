import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

const filterFavs = (filter, favRecipes) => {
  if (filter !== 'all') {
    return favRecipes.filter((recipe) => recipe.type === filter);
  }
  return favRecipes;
};

const FavoriteCards = ({ filter }) => {
  const [copied, setCopied] = useState(false);
  const [favoriteRecipes, setFavorites] = useState([]);

  const handleShare = (id) => {
    copy(`http://localhost:3000/comidas/${id}`);
    setCopied(!copied);
  };

  useEffect(() => {
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(favRecipes);
  }, []);

  const handleFavorite = (id) => {
    const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    setFavorites(newFavoriteRecipes);
  };

  return (
    <div>
      {filterFavs(filter, favoriteRecipes).map(
        ({ image, alcoholicOrNot, name, category, area, type, id }, index) => (
          <div>
            <Link to={`/${type}s/${id}`}>
              <img data-testid={`${index}-horizontal-image`} src={image} alt={'Some good food'} />
            </Link>
            <div>
              <h2 data-testid={`${index}-horizontal-top-text`}>
                {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
              </h2>
              <Link to={`/${type}s/${id}`}>
                <h1 data-testid={`${index}-horizontal-name`}>{name}</h1>
              </Link>
              <div>
                <button onClick={() => handleShare(id)}>
                  <img
                    id="teste"
                    src={shareIcon}
                    alt="share button"
                    data-testid={`${index}-horizontal-share-btn`}
                  />
                </button>
                <button onClick={() => handleFavorite(id)}>
                  <img
                    src={blackHeartIcon}
                    data-testid={`${index}-horizontal-favorite-btn`}
                    alt={'favorite button'}
                  />
                </button>
                {copied && <span>Link copiado!</span>}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

FavoriteCards.propTypes = {
  filter: PropTypes.string,
};

FavoriteCards.defaultProps = {
  filter: 'all',
};

export default FavoriteCards;

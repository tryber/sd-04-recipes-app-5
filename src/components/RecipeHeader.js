import React, { useState, useContext, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppReceitaContext from '../context/AppReceitaContext';

const RecipeHeader = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const { isFoodRecipe } = props;
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const {
    idMeal,
    idDrink,
    strArea,
    strCategory,
    strAlcoholic,
    strDrink,
    strMeal,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  useEffect(() => {
    console.log(props);
    if (checkFavorite(idMeal || idDrink) !== -1) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  const checkFavorite = (id) => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    return favoriteRecipes.findIndex((recipe) => recipe.id === id);
  };

  const handleFavorite = (id) => {
    setFavorite(!favorite);
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const index = checkFavorite(id);
    if (index !== -1) {
      favoriteRecipes.splice(index, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      return index;
    }

    favoriteRecipes.push({
      id: idDrink || idMeal,
      type: isFoodRecipe ? 'comida' : 'bebida',
      area: strArea || '',
      category: strCategory || '',
      alcoholicOrNot: strAlcoholic || '',
      name: strDrink || strMeal,
      image: strDrinkThumb || strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };

  return (
    <header>
      <img data-testid="recipe-photo" src={isFoodRecipe ? recipe.strMealThumb : recipe.strDrinkThumb} />
      <div>
        <h1 data-testid="recipe-title">{isFoodRecipe ? recipe.strMeal : recipe.strDrink}</h1>
        <div>
          <CopyToClipboard text={window.location.href} onCopy={() => setCopied(true)}>
            <img data-testid="share-btn" src={shareIcon} />
          </CopyToClipboard>
          <img
            data-testid="favorite-btn"
            src={favorite ? blackHeartIcon : whiteHeartIcon}
            onClick={() => handleFavorite(idMeal || idDrink)}
          />
          {copied && <span>Link copiado!</span>}
        </div>
      </div>
      <div>
        <h3 data-testid="recipe-category">{isFoodRecipe ? recipe.strCategory : recipe.strAlcoholic}</h3>
      </div>
    </header>
  );
};

export default RecipeHeader;

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';
import CardDoneRecipe from '../components/CardDoneRecipe';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const handleShare = (type, id, setIsShow) => {
  copy(`http://localhost:3000/${type}/${id}`);
  setIsShow(false);
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const doneDrink = (recipe, isShow, setIsShow, index) => {
  const { id, name, image, doneDate, alcoholicOrNot } = recipe;
  const isFood = false;
  return (
    <div>
      <CardDoneRecipe recipe={recipe}/>
      {isShow ? (
        <button onClick={() => handleShare('bebidas', id, setIsShow)}>
          <img
            data-testid={`${index}-horizontal-share-btn`}
            src={shareIcon}
            alt="icone que eu nao tinha visto"
          />
        </button>
      ) : (
        <p>Link copiado!</p>
      )}
    </div>
  );
};

const doneFood = (recipe, isShow, setIsShow, index) => {
  const { id } = recipe;

  return (
    <div className="doneFoods">
      <CardDoneRecipe recipe={recipe}/>
      
      {isShow ? (
        <button onClick={() => handleShare('comidas', id, setIsShow)}>
          <img
            data-testid={`${index}-horizontal-share-btn`}
            src={shareIcon}
            alt="outro icone"
          />
        </button>
      ) : (
        <p>Link copiado!</p>
      )}
    </div>
  );
};

function DoneRecipes() {
  const [isShow, setIsShow] = useState(true);
  const { doneRecipes, setDoneRecipes } = useContext(AppReceitaContext);

  const classes = useStyles();

  const all = JSON.parse(localStorage.getItem('doneRecipes'));
  const food = all && all.filter((recipe) => recipe.type === 'comida');
  const drink = all && all.filter((recipe) => recipe.type === 'bebida');

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchBtn={false} />
      <button
        data-testid="filter-by-food-btn"
        onClick={() => setDoneRecipes(food)}
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={() => setDoneRecipes(drink)}
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        onClick={() => setDoneRecipes(all)}
      >
        All
      </button>
      <div class="container">
        <div class="row">
          {doneRecipes &&
          doneRecipes.map((recipe, index) =>
            recipe.type === 'comida'
              ? doneFood(recipe, isShow, setIsShow, index)
              : doneDrink(recipe, isShow, setIsShow, index)
          )}
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;

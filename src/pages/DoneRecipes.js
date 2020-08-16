import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';

const handleShare = (type, id, setIsShow) => {
  copy(`http://localhost:3000/${type}/${id}`);
  setIsShow(false);
};

const doneDrink = (recipe, isShow, setIsShow, index) => {
  const { id, name, image, doneDate, alcoholicOrNot } = recipe;

  return (
    <div>
      <Link to={`/bebidas/${id}`}>
        <img
          src={image}
          alt="quando clicar na bebida"
          data-testid={`${index}-horizontal-image`}
        />
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
      <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
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
  const { id, area, category, name, image, doneDate, tags } = recipe;

  return (
    <div className="doneFoods">
      <Link to={`/comidas/${id}`}>
        <img
          src={image}
          alt="quando clicar na comida"
          data-testid={`${index}-horizontal-image`}
        />
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <p data-testid={`${index}-horizontal-top-text`}>
        {area} - {category}
      </p>
      <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
      <p>
        {tags.slice(0, 2).map((tag) => (
          <span data-testid={`${index}-${tag}-horizontal-tag`}>{tag}</span>
        ))}
      </p>
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

  const all = JSON.parse(localStorage.getItem('doneRecipes'));
  const food = all.filter((recipe) => recipe.type === 'comida');
  const drink = all.filter((recipe) => recipe.type === 'bebida');

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
      {doneRecipes.map((recipe, index) =>
        recipe.type === 'comida'
          ? doneFood(recipe, isShow, setIsShow, index)
          : doneDrink(recipe, isShow, setIsShow, index),
      )}
    </div>
  );
}

export default DoneRecipes;

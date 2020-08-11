import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';

const doneDrink = (recipe) => {
  const {name, image, doneDate, alcoholicOrNot,} = recipe;

  return (
    <div>
      <img src={image} alt="Foto da imagem" />
      <p>Nome: {name}</p>
      <p>{alcoholicOrNot}</p>
      <p>Data de realização: {doneDate}</p>
      <button>
        <img src={shareIcon} />
      </button>
    </div>
  );
};

const doneFood = (recipe) => {
  const {area, category, name, image, doneDate, tags} = recipe;
  const tags = tags.slice(0,2);
  return (
    <div className="doneFoods">
      <img src={image} alt="Foto da imagem" />
      <p>Nome: {name}</p>
      <p>Categoria: {category}</p>
      <p>Area: {area}</p>
      <p>Data de realização: {doneDate}</p>
      {tags.map((tag) => 
        <div>
          <p>Tag API: {tag}</p>
        </div>
        )}
      <button>
        <img src={shareIcon} />
      </button>
    </div>
  );
};

function DoneRecipes() {
  const { doneRecipes } = useContext(AppReceitaContext);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchBtn={false} />
      {doneRecipes.map((recipe) => recipe.type === 'comida' ? doneFood(recipe) : doneDrink(recipe))}
    </div>
  );
}

export default DoneRecipes;

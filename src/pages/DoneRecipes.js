import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import AppReceitaContext from '../context/AppReceitaContext';
import shareIcon from '../images/shareIcon.svg';
import copy from 'clipboard-copy';

const handleShare = (type, id, setIsShow) => {
  copy(`http://localhost:3000/${type}/${id}`);
  setIsShow(false);
};

const doneDrink = (recipe) => {
  const [isShow, setIsShow] = useState(true);
  const { id, name, image, doneDate, alcoholicOrNot } = recipe;

  return (
    <div>
      <img src={image} alt="Foto da imagem" />
      <p>Nome: {name}</p>
      <p>{alcoholicOrNot}</p>
      <p>Data de realização: {doneDate}</p>
      {isShow ? (
        <button onClick={() => handleShare('bebidas', id, setIsShow)}>
          <img src={shareIcon} />
        </button>
      ) : (
        <p>Link copiado!</p>
      )}
    </div>
  );
};

const doneFood = (recipe) => {
  const [isShow, setIsShow] = useState(true);
  const { area, category, name, image, doneDate, tags } = recipe;
  const tags = tags.slice(0, 2);
  return (
    <div className="doneFoods">
      <img src={image} alt="Foto da imagem" />
      <p>Nome: {name}</p>
      <p>Categoria: {category}</p>
      <p>Area: {area}</p>
      <p>Data de realização: {doneDate}</p>
      {tags.map((tag) => (
        <div>
          <p>Tag API: {tag}</p>
        </div>
      ))}
      {isShow ? (
        <button onClick={() => handleShare('comidas', id, setIsShow)}>
          <img src={shareIcon} />
        </button>
      ) : (
        <p>Link copiado!</p>
      )}
    </div>
  );
};

function DoneRecipes() {
  const { doneRecipes } = useContext(AppReceitaContext);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchBtn={false} />
      {doneRecipes.map((recipe) =>
        recipe.type === 'comida' ? doneFood(recipe) : doneDrink(recipe)
      )}
    </div>
  );
}

export default DoneRecipes;

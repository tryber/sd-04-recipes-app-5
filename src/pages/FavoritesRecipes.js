import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header pageTitle="Receitas Favoritas" searchBtn={false} />
      <p> Nome comida </p>
      <p> Ingredientes </p>
      <p> Instruções </p>
      <p> Video </p>
      <p> Recomendados </p>
    </div>
  );
}

export default FavoriteRecipes;

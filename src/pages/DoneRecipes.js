import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchBtn={false} />
      <p> Nome comida </p>
      <p> Ingredientes </p>
      <p> Instruções </p>
      <p> Video </p>
      <p> Recomendados </p>
    </div>
  );
}

export default DoneRecipes;

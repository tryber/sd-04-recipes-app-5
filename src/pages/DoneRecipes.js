import React from 'react';
import Header from '../components/Header';
// irei alterar nessa pagina
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

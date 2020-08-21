import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppReceitaContext from '../context/AppReceitaContext';
import CardDoneRecipe from '../components/CardDoneRecipe';

const doneDrink = (recipe) => {
  return (
    <div>
      <CardDoneRecipe recipe={recipe}/>
      <p></p>
    </div>
  );
};

const doneFood = (recipe) => {
  return (
    <div className="doneFoods">
      <CardDoneRecipe recipe={recipe}/>
      <p></p>
    </div>
  );
};

function DoneRecipes() {
  const { doneRecipes, setDoneRecipes } = useContext(AppReceitaContext);

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
              ? doneFood(recipe, index)
              : doneDrink(recipe, index)
          )}
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;

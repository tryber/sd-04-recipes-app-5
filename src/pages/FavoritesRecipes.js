import React, { useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipesFilter from '../components/FavoriteRecipesFilter';
import FavoriteCards from '../components/FavoriteCards';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  console.log(filter);
  return (
    <div>
      <Header pageTitle="Receitas Favoritas" searchBtn={false} />
      <FavoriteRecipesFilter setFilter={setFilter} />
      <FavoriteCards filter={filter} />
    </div>
  );
}

export default FavoriteRecipes;

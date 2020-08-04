import React, { useState } from 'react';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';


const fetchesMeals = {
  name: getMealByName,
  ingredient: getMealByIngredients,
  letter: getMealByLetter,
};

const fetchesDrinks = {
  name: getDrinkByName,
  ingredient: getDrinkByIngredients,
  letter: getDrinkByLetter,
};
// busca pela primeira letra e alert para caso deferente
const searchLetter = async (filter, oneLetter) => {
  const getMeal = fetchesMeals[filter];
  const getDrink = fetchesDrinks[filter];
  if (filter === 'letter' && oneLetter.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {(
    getMeal,
    getDrink,
    // colocar lógica de location e history que será usado na "const seachBar" abaixo
  )};
  return undefined;
};

const SearchBar = () => {
  const [setSelected] = useState('name');
  const [setSearch] = useState('');
  return (
    <div>
      <input
        type="text" data-testid="search-input"
        name="searchBar" onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {/* button radio - requisito 14 */}
        <input
          type="radio" data-testid="ingredient-search-radio" key="Ingrediente"
          name="filter" onClick={() => setSelected('ingredient')}
        /><span>Ingrediente</span>
        <input
          type="radio" data-testid="name-search-radio" key="Nome"
          name="filter" onClick={() => setSelected('name')}
        /><span>Nome</span>
        <input
          type="radio" data-testid="first-letter-search-radio" key="PrimeiraLetra"
          name="filter" onClick={() => setSelected('letter')}
        /><span>Primeira Letra</span>
      </div>
      <button data-testid="exec-search-btn" onClick={() => handleChange()}>Buscar</button>
    </div>
  );
};

export default SearchBar;

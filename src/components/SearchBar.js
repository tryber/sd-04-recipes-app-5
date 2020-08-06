import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';
import AppReceitaContext from '../context/AppReceitaContext';


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
// busca pela primeira letra e alert para caso diferente
const searchLetter = async (filter, oneLetter, location) => {
  const getMeal = fetchesMeals[filter];
  const getDrink = fetchesDrinks[filter];
  if (filter === 'letter' && oneLetter.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else if (location.match(/comidas/)) {
    const result = await getMeal(oneLetter).then((response) => response.meals);
    return result;
  } else if (location.match(/bebidas/)) {
    const result = await getDrink(oneLetter).then((response) => response.drinks);
    return result;
  }
  return undefined;
};

const SearchBar = () => {
  const history = useHistory(); const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');
  const { setCocktails } = useContext(AppReceitaContext);
  const { getMeals: { receiveSearchedMeals } } = useContext();//Colocar hooks no usecontext
  const verifyReceived = (obj, type) => {
    const reconf = { comidas: 'idMeal', bebidas: 'idDrink' };
    history.push(`${location.pathname}/${obj[0][reconf[type]]}`);
  };
  // alert para casos não encontra receita
  const handleChange = async () => {
    let received = []; const type = location.pathname.slice(1, 8);
    const route = location.pathname;
    received = await searchLetter(selected, search, route);
    if (!received) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      // senão retorna condições normais { setCocktails } & getMeals: { receiveSearchedMeals }
  };
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

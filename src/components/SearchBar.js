import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AppReceitaContext from '../context/AppReceitaContext';
import {
  getMealByLetterType,
  getMealByIngredientsType,
  getMealByNameType,
  getMealByIngredients,
} from '../services/MealDB-API';

// check da type para query na API e tratamento da mesma
const checkLength = (type, arr, setRedirect, mealsType, setFunctionEvent) => {
  if (!arr) return null;
  if (arr.length === 1) {
    setRedirect({
      shouldRedirect: true,
      type: mealsType.toLowerCase(),
      id:
        arr[0][
          `id${type
            .split('')
            .map((char, i) => (i === 0 ? char.toUpperCase() : char))
            .join('')}`
        ],
    });
  }
  return setFunctionEvent(arr);
};

// check se busca é nula
export const checkIsNull = (resp, type, setRedirect, mealsType, setFunctionEvent) => {
  const newType = type === 'meal' ? 'meals' : 'drinks';
  if (!resp[newType]) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  const arr = resp[newType];
  const mealsFilterType = type === 'cocktail' ? 'drink' : 'meal';

  checkLength(mealsFilterType, arr, setRedirect, mealsType, setFunctionEvent);
  return null;
};

// Evento seleção button radio
const eventRadioBtn = (event, setFunctionEvent) => {
  setFunctionEvent(event.target.value);
};

// Atribui type para ambas as API e filtrar por nome, ingrediente, primerira letra no btn-radio
export const mealsFilter = (mealsType, input, option, setFunctionEvent, setRedirect) => {
  let type = 'cocktail';
  if (mealsType === 'comidas') {
    type = 'meal';
  }
  console.log('Input Meal', input);
  switch (option) {
    case 'ingredient':
      getMealByIngredients(type, input).then((resp) => {
        checkIsNull(resp, type, setRedirect, mealsType, setFunctionEvent);
      });
      break;
    case 'name':
      getMealByNameType(type, input).then((resp) => {
        checkIsNull(resp, type, setRedirect, mealsType, setFunctionEvent);
      });
      break;
    case 'first-letter':
      if (input.length === 1) {
        // getMealByLetterType(type, input).then((data) => console.log('data', data));
        getMealByLetterType(type, input).then((resp) => {
          checkIsNull(resp, type, setRedirect, mealsType, setFunctionEvent);
        });
      } else {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      break;
    default:
  }
};

// Barra de busca após set dos button radio
const SearchBar = ({ mealsType }) => {
  const [redirect, setShoudlRedirect] = useState({ shouldRedirect: false, type: '', id: '' });
  const {
    setDataDrink,
    setDataFood,
    inputText,
    setInputText,
    selectedOption,
    setSelectedOption,
  } = useContext(AppReceitaContext);

  const createInputRadio = (value, testid, name) => (
    <label htmlFor={value}>
      <input
        value={value}
        type="radio"
        data-testid={testid}
        id={value}
        checked={selectedOption === `${value}`}
        onChange={(event) => eventRadioBtn(event, setSelectedOption)}
      />
      {name}
    </label>
  );
  if (redirect.shouldRedirect) return <Redirect to={`/${redirect.type}/${redirect.id}`} />;
  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        data-testid="search-input"
        onChange={(event) => eventRadioBtn(event, setInputText)}
      />
      {createInputRadio('ingredient', 'ingredient-search-radio', 'Ingredient')}
      {createInputRadio('name', 'name-search-radio', 'Name')}
      {createInputRadio('first-letter', 'first-letter-search-radio', 'First letter')}
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={() => {
          if (mealsType === 'comidas') {
            mealsFilter(mealsType, inputText, selectedOption, setDataFood, setShoudlRedirect);
          } else {
            mealsFilter(mealsType, inputText, selectedOption, setDataDrink, setShoudlRedirect);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  mealsType: PropTypes.string.isRequired,
};

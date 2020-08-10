import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AppReceitaContext from '../context/AppReceitaContext';
import { getMealByLetterType, getMealByIngredientsType, getMealByNameType } from '../services/MealDB-API';

// check de todos os parametros
const allChecks = (resp, type, setRedirect, mealsType, setFunctionEvent) => {
  checkIsNull(resp);
  checkLength(type, resp, setRedirect, mealsType, setFunctionEvent);
};

// check se busca é nula
const checkIsNull = (resp) => {
  if (!resp) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return null;
};

// Evento seleção button radio
const eventRadioBtn = (event, setFunctionEvent) => {
  setFunctionEvent(event.target.value);
  console.log(eventRadioBtn);
};

// Checar tamanho da palavra busca
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

// filtrar comidas por nome, ingrediente, primerira letra
const mealsFilter = (mealsType, input, option, setFunctionEvent, setRedirect) => {
  let type = 'cocktail';
  if (mealsType === 'Comidas') {
    type = 'meal';
  }
  switch (option) {
    case 'ingredient':
      getMealByIngredientsType(type, input).then((resp) => {
        allChecks(resp, type, setRedirect, mealsType, setFunctionEvent);
      });
      break;
    case 'name':
      getMealByNameType(type, input).then((resp) => {
        allChecks(resp, type, setRedirect, mealsType, setFunctionEvent);
      });
      break;
    case 'first-letter':
      if (input.length === 1) {
        getMealByLetterType(type, input).then((resp) => {
          allChecks(resp, type, setRedirect, mealsType, setFunctionEvent);
        });
      } else {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      break;
    default:
  }
};

// Barra de busca e button radio
const SearchBar = ({ mealsType }) => {
  const [redirect, setShoudlRedirect] = useState({ shouldRedirect: false, type: '', id: '' });
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { setMeals, setDrinks } = useContext(AppReceitaContext);

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
          if (console.log(mealsType) === 'Comidas') {
            mealsFilter(mealsType, inputText, selectedOption, setMeals, setShoudlRedirect);
          } else {
            mealsFilter(mealsType, inputText, selectedOption, setDrinks, setShoudlRedirect);
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

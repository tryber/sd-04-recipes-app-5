import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getDrinksIngredients, getDrinkByIngredients } from '../services/DrinkDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

function ExploreDrinkByIngredients() {
  const { setDataDrink } = useContext(AppReceitaContext);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    getDrinksIngredients().then((data) => {
      setDrinksIngredients(data.drinks);
    });
  }, []);

  const handleRedirect = (ingredient) => {
    getDrinkByIngredients(ingredient).then((resp) => {
      setDataDrink(resp.drinks);
      setShouldRedirect(true);
    });
  };
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchBtn={false} />
      <div>
        {shouldRedirect && <Redirect to="/bebidas" />}
        {drinksIngredients.slice(0, 12).map((drink, index) => (
          <a
            key={drink.strIngredient1}
            tabIndex={index}
            onClick={() => handleRedirect(drink.strIngredient1)}
            data-testid={`${index}-ingredient-card`}
          >
            <img
              data-testid={`${index}-card-img`}
              src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png`}
              alt={drink.strIngredient1}
            />
            <h1 data-testid={`${index}-card-name`}>{drink.strIngredient1}</h1>
          </a>
        ))}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreDrinkByIngredients;

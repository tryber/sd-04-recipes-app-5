import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getMealsIngredients, getMealByIngredientsType } from '../services/MealDB-API';
import AppReceitaContext from '../context/AppReceitaContext';

function ExploreFoodByIngredients() {
  const { setDataFood } = useContext(AppReceitaContext);
  const [mealIngredients, setMealIngredients] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    getMealsIngredients().then((data) => {
      setMealIngredients(data.meals);
    });
  }, []);

  const handleRedirect = (ingredient) => {
    getMealByIngredientsType('meal', ingredient).then((resp) => {
      setDataFood(resp.meals);
      setShouldRedirect(true);
    });
  };

  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchBtn={false} />
      {shouldRedirect && <Redirect to="/comidas" />}
      <div>
        {mealIngredients.slice(0, 12).map((meal, index) => (
          <a
            key={meal.strIngredient}
            tabIndex={index}
            onClick={() => handleRedirect(meal.strIngredient)}
            data-testid={`${index}-ingredient-card`}
          >
            <img
              data-testid={`${index}-card-img`}
              src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient}-Small.png`}
              alt={meal.strIngredient}
            />
            <h1 data-testid={`${index}-card-name`}>{meal.strIngredient}</h1>
          </a>
        ))}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByIngredients;

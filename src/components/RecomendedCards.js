import React, { useContext, useState, useEffect } from 'react';
import { getDrinks } from '../services/DrinkDB-API';
import { getMeals } from '../services/MealDB-API';

const RecomendedCards = (props) => {
  const { isFoodRecipe } = props;
  const [recomended, setRecomended] = useState(null);
  useEffect(() => {
    if (isFoodRecipe) {
      getMeals().then((data) => setRecomended(data.meals.slice(0, 6)));
    } else {
      getDrinks().then((data) => setRecomended(data.drinks.slice(0, 6)));
    }
  }, []);
  if (recomended) {
    return (
      <div>
        <h2>Recomendadas</h2>
        {recomended.map((card, index) => (
          <div data-testid={`${index}-recomendation-card`}>
            <img src={isFoodRecipe ? card.strMealThumb : card.strDrinkThumb} />
            <h2>{card.strCategory}</h2>
            <h1 data-tesid={`${index}-recomendation-title`}>{isFoodRecipe ? card.strMeal : card.strDrink}</h1>
          </div>
        ))}
      </div>
    );
  }
  return <div>...loading</div>;
};

export default RecomendedCards;

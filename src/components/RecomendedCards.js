import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { getDrinks } from '../services/DrinkDB-API';
import { getMeals } from '../services/MealDB-API';

const RecomendedCards = (props) => {
  const { isFoodRecipe } = props;
  const [recomended, setRecomended] = useState(null);
  useEffect(() => {
    if (isFoodRecipe) {
      getDrinks().then((data) => setRecomended(data.drinks.slice(0, 6)));
    } else {
      getMeals().then((data) => setRecomended(data.meals.slice(0, 6)));
    }
  }, []);
  if (recomended) {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div class="carousel-wrapper">
        <h2>Recomendadas</h2>
        <Slider {...settings}>
          {recomended.map((card, index) => (
            <div key={index} data-testid={`${index}-recomendation-card`}>
              <img src={isFoodRecipe ? card.strDrinkThumb : card.strMealThumb} />
              <h2>{card.strCategory}</h2>
              <h1 data-testid={`${index}-recomendation-title`}>{isFoodRecipe ? card.strDrink : card.strMeal}</h1>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  return <div>...loading</div>;
};

export default RecomendedCards;

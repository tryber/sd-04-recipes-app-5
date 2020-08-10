import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
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
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="carousel-wrapper">
        <h2>Recomendadas</h2>
        <Slider {...settings}>
          {recomended.map((card, index) => (
            <div
              key={isFoodRecipe ? card.strDrink : card.strMeal}
              data-testid={`${index}-recomendation-card`}
            >
              <img
                src={isFoodRecipe ? card.strDrinkThumb : card.strMealThumb}
                alt={`${isFoodRecipe ? card.strDrink : card.strMeal}`}
              />
              <h2>{card.strCategory}</h2>
              <h1 data-testid={`${index}-recomendation-title`}>
                {isFoodRecipe ? card.strDrink : card.strMeal}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  return <div>...loading</div>;
};

RecomendedCards.propTypes = {
  isFoodRecipe: PropTypes.bool,
};

RecomendedCards.defaultProps = {
  isFoodRecipe: true,
};

export default RecomendedCards;

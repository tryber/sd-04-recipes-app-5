import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandomMeal } from '../services/MealDB-API';

function ExploreFood() {
  const [randomMeal, setRandomMeal] = useState();
  useEffect(() => {
    getRandomMeal().then((data) => {
      console.log('data', data.meals[0].idMeal);
      setRandomMeal(data.meals[0].idMeal);
    });
  }, []);

  return (
    <div>
      <Header pageTitle="Explorar Comidas" searchBtn={false} />
      <div>
        <Link to="/explorar/comidas/ingredientes">
          <button data-testid="explore-by-ingredient">Por Ingredientes</button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button data-testid="explore-by-area">Por Local de Origem</button>
        </Link>
        <Link to={`/comidas/${randomMeal}`}>
          <button data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFood;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandomDrink } from '../services/DrinkDB-API';

function ExploreDrink() {
  const [randomDrink, setRandomDrink] = useState();
  useEffect(() => {
    getRandomDrink().then((data) => {
      setRandomDrink(data.drinks[0].idDrink);
    });
  }, []);
  return (
    <div>
      <Header pageTitle="Explorar Bebidas" searchBtn={false} />
      <div>
        <Link to="/explorar/bebidas/ingredientes">
          <button data-testid="explore-by-ingredient">Por Ingredientes</button>
        </Link>
        <Link to={`/bebidas/${randomDrink}`}>
          <button data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreDrink;

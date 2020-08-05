import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useDrinks from '../hooks/useDrinks';

function Drink() {
  const drinks = useDrinks();

  if (!drinks) return <p> Loading... </p>;

  return (
    <div className="Drink">
      <div className="container">
        <div className="row row-cols-2">
          {drinks.slice(0, 12).map((drink) => (
            <div key={drink.idDrink} className="col">
              {console.log("Categoria", drink.strCategory)}
              <Link to={`/comidas/${drink.idDrink}`}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={drink.strDrinkThumb}
                    className="card-img-top"
                    alt="Meal picture"
                  />
                  <div className="card-body">
                    <p className="card-text">{drink.strDrink}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Drink;

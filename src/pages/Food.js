import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useFoods from '../hooks/useFoods';

function Food() {
  const foods = useFoods();

  if (!foods) return <p> Loading... </p>;

  return (
    <div className="FoodPage">
      <div className="container">
        <div className="row row-cols-2">
          {foods.slice(0, 12).map((food) => (
            <div key={food.idMeal} className="col">
              <Link to={`/comidas/${food.idMeal}`}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={food.strMealThumb}
                    className="card-img-top"
                    alt="Meal picture"
                  />
                  <div className="card-body">
                    <p className="card-text">{food.strMeal}</p>
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

export default Food;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useFoods from '../hooks/useFoods';

function Food() {
  const { dataFood, category, getFoodByCategory } = useFoods();
  const fiveCategories = category.slice(0, 5);

  if (!dataFood) return <p> Loading... </p>;

  return (
    <div className="foodPage">
      <div className="BotoesCategories">
        <button onClick={() => getFoodByCategory('All')}>All</button>
        {fiveCategories.map((categoria) => (
          <div key={categoria.strCategory} className="categoria">
            <button
              data-testid={`${categoria.strCategory}-category-filter`}
              onClick={() => getFoodByCategory(categoria.strCategory)}
            >
              {categoria.strCategory}
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row row-cols-2">
          {dataFood.slice(0, 12).map((food) => (
            <div key={food.idMeal} className="col">
              <Link to={`/comidas/${food.idMeal}`}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={food.strMealThumb}
                    className="card-img-top"
                    alt="Meal"
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

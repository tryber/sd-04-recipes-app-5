import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useDrinks from '../hooks/useDrinks';

function Drink() {
  const { dataDrink, category, getDrinkByCategory } = useDrinks();
  const fiveCategories = category.slice(0, 5);

  if (!dataDrink) return <p> Loading... </p>;

  return (
    <div className="drinkPage">
      <div className="BotoesCategories">
        <button onClick={() => getDrinkByCategory('All')}>All</button>
        {fiveCategories.map((categoria) => (
          <div key={categoria.strCategory} className="categoria">
            <button
              data-testid={`${categoria.strCategory}-category-filter`}
              onClick={() => getDrinkByCategory(categoria.strCategory)}
            >
              {categoria.strCategory}
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row row-cols-2">
          {dataDrink.slice(0, 12).map((drink) => (
            <div key={drink.idDrink} className="col">
              {console.log('Categoria', drink.strCategory)}
              <Link to={`/bebidas/${drink.idDrink}`}>
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

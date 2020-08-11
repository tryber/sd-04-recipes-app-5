import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useDrinks from '../hooks/useDrinks';
import Header from '../components/Header';

const drinkCard = (dataDrink) => {
  return (
    <div className="container">
      <div className="row row-cols-2">
        {dataDrink.slice(0, 12).map((drink, index) => (
          <div
            key={drink.idDrink}
            data-testid={`${index}-recipe-card`}
            className="col"
          >
            {console.log('Categoria', drink.strCategory)}
            <Link to={`/bebidas/${drink.idDrink}`}>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={drink.strDrinkThumb}
                  data-testid={`${index}-card-img`}
                  className="card-img-top"
                  alt="Drink"
                />
                <div className="card-body">
                  <p className="card-text" data-testid={`${index}-card-name`}>
                    {drink.strDrink}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

function Drink() {
  const { dataDrink, category, getDrinkByCategory } = useDrinks();
  const fiveCategories = category.slice(0, 5);

  if (!dataDrink) return <p> Loading... </p>;

  return (
    <div className="drinkPage">
      <Header pageTitle="Bebidas" />
      <div className="BotoesCategories">
        <button
          data-testid="All-category-filter"
          onClick={() => getDrinkByCategory('All')}
        >
          All
        </button>
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
      {drinkCard(dataDrink)}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Drink;

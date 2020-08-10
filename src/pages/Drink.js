import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
<<<<<<< HEAD
import useDrinks from '../hooks/useDrinks';
=======
import Header from '../components/Header';
>>>>>>> b7425867a58c4a987f127fbdd037650801ec8569

function Drink() {
  const { dataDrink, category, getDrinkByCategory } = useDrinks();
  const fiveCategories = category.slice(0, 5);

  if (!dataDrink) return <p> Loading... </p>;

  return (
<<<<<<< HEAD
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
                    alt="Drink"
                  />
                  <div className="card-body">
                    <p className="card-text">{drink.strDrink}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
=======
    <div>
      <Header pageTitle="Bebidas" />
      <div className="DetailsDrink">
        <Link to={`/bebidas/${idDrink}`}>
          <p>Each Drink</p>
        </Link>
>>>>>>> b7425867a58c4a987f127fbdd037650801ec8569
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Drink;

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinkByIngredients() {
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchBtn={false} />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreDrinkByIngredients;

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodByIngredients() {
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchBtn={false} />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreFoodByIngredients;

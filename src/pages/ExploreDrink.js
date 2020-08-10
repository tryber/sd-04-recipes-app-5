import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrink() {
  return (
    <div>
      <Header pageTitle="Explorar Bebidas" searchBtn={false} />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ExploreDrink;

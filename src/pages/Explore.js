import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorar() {
  return (
    <div>
      <Header pageTitle="Explorar" searchBtn={false} />
      <div>
        <Link to="/explorar/comidas">
          <button data-testid="explore-food">Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas">
          <button data-testid="explore-drinks">Explorar Bebidas</button>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Explorar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitaContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Food() {
  const { idFood } = useContext(AppReceitasContext);
  return (
    <div>
      <Header pageTitle="Comidas" />
      <div className="DetailsFood">
        <Link to={`/comidas/${idFood}`}>
          <p>Each Food</p>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Food;

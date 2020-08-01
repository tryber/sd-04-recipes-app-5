import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitaContext';
import Footer from '../components/Footer';

function Food() {
  const { idFood } = useContext(AppReceitasContext);
  return (
    <div>
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

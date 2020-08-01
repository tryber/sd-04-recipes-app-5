import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitaContext';
import Footer from '../components/Footer';

function Drink() {
  const { idDrink } = useContext(AppReceitasContext);
  return (
    <div>
      <div className="DetailsDrink">
        <Link to={`/bebidas/${idDrink}`}>
          <p>Each Drink</p>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Drink;

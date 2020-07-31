import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Footer.css';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <div>
      <footer className="footer" data-testid="footer">
        <Link to="/bebidas">
          <img
            src={drinkIcon}
            data-testid="drinks-bottom-btn"
            alt="Icone de Bebida"
          />
        </Link>
        <Link to="/comidas">
          <img
            src={mealIcon}
            data-testid="food-bottom-btn"
            alt="Icone de Comida"
          />
        </Link>
        <Link to="/explorar">
          <img
            src={exploreIcon}
            data-testid="explore-bottom-btn"
            alt="Icone de Explorar"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;

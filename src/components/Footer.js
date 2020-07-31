import React from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <div>
      <footer>
        <Link to="/bebidas">
          <img src={drinkIcon} alt="Icone de Bebida" />
        </Link>
        <Link to="/comidas">
          <img src={mealIcon} alt="Icone de Comida"/>
        </Link>
        <Link to="/explorar">
          <img src={exploreIcon} alt="Icone de Explorar"/>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;

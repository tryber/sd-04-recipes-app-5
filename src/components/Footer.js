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
          <img src={drinkIcon} />
        </Link>
        <Link to="/comidas">
          <img src={mealIcon} />
        </Link>
        <Link to="/explorar">
          <img src={exploreIcon} />
        </Link>
      </footer>      
    </div>
  );
}

export default Footer;

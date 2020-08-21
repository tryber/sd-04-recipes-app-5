import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Footer.css';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  const rotas = ['bebidas', 'comidas', 'explorar'];
  const dataTestId = ['drinks', 'food', 'explore'];
  const iconArr = [drinkIcon, mealIcon, exploreIcon];

  return (
    <footer className="footer" data-testid="footer">
      <div class="container">
        <div class="row align-items-end">
          <div class="col">
            {rotas.map((rota, index) => (
              <Link to={`/${rota}`}>
                <img
                  src={iconArr[index]}
                  data-testid={`${dataTestId[index]}-bottom-btn`}
                  alt="Icones gerais"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

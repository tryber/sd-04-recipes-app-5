import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <div>
      <footer>
        <img src={drinkIcon} />
        <img src={mealIcon} />
        <img src={exploreIcon} />
      </footer>      
    </div>
  );
}

export default Footer;

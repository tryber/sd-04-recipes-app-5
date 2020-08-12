import PropTypes from 'prop-types';
import React from 'react';

const FavoriteRecipesFilter = ({ setFilter }) => (
  <div>
    <button onClick={() => setFilter('all')} data-testid="filter-by-all-btn">
      All
    </button>
    <button onClick={() => setFilter('comida')} data-testid="filter-by-food-btn">
      Food
    </button>
    <button onClick={() => setFilter('bebida')} data-testid="filter-by-drink-btn">
      Drinks
    </button>
  </div>
);

FavoriteRecipesFilter.propTypes = {
  setFilter: PropTypes.func,
};

FavoriteRecipesFilter.defaultProps = {
  setFilter: () => console.log('função default'),
};

export default FavoriteRecipesFilter;

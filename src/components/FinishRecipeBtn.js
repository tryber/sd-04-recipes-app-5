import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const FinishRecipeBtn = (props) => (
  <Link to={'/receitas-feitas'}>
    <button
      disabled={Object.values(props.ingredientsCheck).some(
        (ingredient) => ingredient.checked === false,
      )}
      className="btn-fixed-footer"
      data-testid="finish-recipe-btn"
    >
      Finalizar Receita
    </button>
  </Link>
);

FinishRecipeBtn.propTypes = {
  ingredientsCheck: PropTypes.objectOf(
    PropTypes.shape({ measure: PropTypes.string, checked: PropTypes.bool }),
  ),
};

FinishRecipeBtn.defaultProps = {
  ingredientsCheck: {},
};

export default FinishRecipeBtn;

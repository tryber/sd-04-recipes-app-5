import React, { useState, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';
import RecipeDetails from '../pages/RecipeDetails';

const Ingredients = (props) => {
  const { recipe } = useContext(AppReceitaContext);
  const [ingredientsCheck, setIngredientsCheck] = useState({});

  let ingredients = {};
  let i = 1;

  while (recipe[`strIngredient${i}`]) {
    ingredients = {
      ...ingredients,
      [recipe[`strIngredient${i}`]]: recipe[`strMeasure${i}`],
    };
    i++;
  }

  console.log(ingredients);

  const handleCheckBox = (e) => {
    setIngredientsCheck({
      ...ingredientsCheck,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>Ingredients</h2>
      {props.process ? (
        Object.entries(ingredients).map(([ingredient, measure], index) => (
          <label data-testid={`${index}-ingredient-step`}>
            <input name={ingredient} type="checkbox" checked={ingredientsCheck.ingredient} onChange={handleCheckBox} />
            {`${ingredient} - ${measure}`}
          </label>
        ))
      ) : (
        <ul>
          {Object.entries(ingredients).map(([ingredient, measure], index) => (
            <li data-testid={`${index}-ingredient-name-and-measure`}>{`${ingredient} - ${measure}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ingredients;

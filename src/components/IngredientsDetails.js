import React, { useEffect, useContext, useState } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

const IngredientsDetails = () => {
  const { recipe } = useContext(AppReceitaContext);
  const [ingredients, setIngredients] = useState({});
  useEffect(() => {
    let i = 1;
    let newIngredients = {};
    while (recipe[`strIngredient${i}`]) {
      newIngredients = {
        ...newIngredients,
        [recipe[`strIngredient${i}`]]: recipe[`strMeasure${i}`],
      };
      i += 1;
    }
    setIngredients({ ...newIngredients });
    console.log('ingredients', ingredients);
  }, []);

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {console.log(ingredients)}
        {Object.entries(ingredients).map(([ingredient, measure], index) => (
          <li
            key={ingredient}
            data-testid={`${index}-ingredient-name-and-measure`}
          >{`${ingredient} - ${measure}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsDetails;

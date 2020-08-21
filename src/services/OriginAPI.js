// Para tela de origem/area
export const getRecipeList = (type) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?a=list`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const getCountry = (area) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

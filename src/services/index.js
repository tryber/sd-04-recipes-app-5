const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const fetchFoodApi = async () => await fetch(url)
  .then((response) => response.json())
  .catch((err) => console.log('Erro API food', err));

export default fetchFoodApi;

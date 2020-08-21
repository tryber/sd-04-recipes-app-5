<div className={classes.root}>
  <GridList cellHeight={180} className={classes.gridList}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <ListSubheader component="div">Comidas</ListSubheader>
    </GridListTile>
    {dataDrink.slice(0, 12).map((drink, index) => (
      <GridListTile key={drink.idDrink} data-testid={`${index}-recipe-card`}>
        <img
              src={drink.strDrinkThumb}
              data-testid={`${index}-card-img`}
              className="card-img-top"
              alt="Drink"
            />
        <GridListTileBar title={drink.strDrink} />
      </GridListTile>
    ))}
  </GridList>
</div>

return (
  <div className="container">
    <div className="row row-cols-2">
      {dataFood.slice(0, 12).map((food, index) => (
        <div key={food.idMeal} data-testid={`${index}-recipe-card`} className="col">
          <Link to={`/comidas/${food.idMeal}`}>
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={food.strMealThumb}
                data-testid={`${index}-card-img`}
                className="card-img-top"
                alt="Meal"
              />
              <div className="card-body">
                <p className="card-text" data-testid={`${index}-card-name`}>
                  {food.strMeal}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

<div className="container">
      <div className="row row-cols-2">
        {dataDrink.slice(0, 12).map((drink, index) => (
          <div
            key={drink.idDrink}
            data-testid={`${index}-recipe-card`}
            className="col"
          >
            {console.log('Categoria', drink.strCategory)}
            <Link to={`/bebidas/${drink.idDrink}`}>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={drink.strDrinkThumb}
                  data-testid={`${index}-card-img`}
                  className="card-img-top"
                  alt="Drink"
                />
                <div className="card-body">
                  <p className="card-text" data-testid={`${index}-card-name`}>
                    {drink.strDrink}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>






































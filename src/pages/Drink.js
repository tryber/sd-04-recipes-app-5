import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import Footer from '../components/Footer';
import useDrinks from '../hooks/useDrinks';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 700,
  },
}));

function drinkCard(dataDrink, classes) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Bebidas</ListSubheader>
        </GridListTile>
        {dataDrink.slice(0, 12).map((drink, index) => (
          <GridListTile key={drink.idDrink} data-testid={`${index}-recipe-card`} >
            <Link to={`/bebidas/${drink.idDrink}`}>
              <img
                src={drink.strDrinkThumb}
                data-testid={`${index}-card-img`}
                className="card-img-top"
                alt="Drink"
              />
              <GridListTileBar title={drink.strDrink} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

function Drink() {
  const { dataDrink, category, getDrinkByCategory } = useDrinks();
  const categories = [{ strCategory: 'All' }, ...category.slice(0, 5)];
  const classes = useStyles();

  if (!dataDrink) return <p> Loading... </p>;

  return (
    <div className="drinkPage">
      <Header recipeType="Bebidas" />
      <Grid container spacing={0}>
        {categories.map((categoria) => (
          <div key={categoria.strCategory}>
            <Grid item xs>
              <Button
                variant="contained"
                color="secondary"
                data-testid={`${categoria.strCategory}-category-filter`}
                onClick={() => getDrinkByCategory(categoria.strCategory)}
              >
                {categoria.strCategory}
              </Button>
            </Grid>
          </div>
        ))}
      </Grid>
      {drinkCard(dataDrink, classes)}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Drink;

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
import useFoods from '../hooks/useFoods';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 700,
  },
}));

function foodCard(dataFood, classes) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">!ComidasFeias.com</ListSubheader>
        </GridListTile>
        {dataFood.slice(0, 12).map((food, index) => (
          <GridListTile key={food.idMeal} data-testid={`${index}-recipe-card`}>
            <Link to={`/comidas/${food.idMeal}`}>
              <img
                src={food.strMealThumb}
                data-testid={`${index}-card-img`}
                className="card-img-top"
                alt="Meal"
              />
              <GridListTileBar title={food.strMeal} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

function Food() {
  const { dataFood, category, getFoodByCategory } = useFoods();
  const categories = [{ strCategory: 'All' }, ...category.slice(0, 5)];

  const classes = useStyles();

  if (!dataFood) return <p> Loading... </p>;

  return (
    <div className="foodpage">
      <Header recipeType="Comidas" />
      <Grid container spacing={0}>
        {categories.map((categoria) => (
          <div key={categoria.strCategory}>
            <Grid item xs>
              <Button
                variant="contained"
                color="secondary"
                data-testid={`${categoria.strCategory}-category-filter`}
                onClick={() => getFoodByCategory(categoria.strCategory)}
              >
                {categoria.strCategory}
              </Button>
            </Grid>
          </div>
        ))}
      </Grid>
      {foodCard(dataFood, classes)}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Food;
